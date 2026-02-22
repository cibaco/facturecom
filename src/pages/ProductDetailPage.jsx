import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProduct, getProductQuantities } from '@/api/EcommerceApi';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/components/ui/use-toast';
import { ShoppingCart as ShoppingCartIcon, Loader2, ArrowLeft, CheckCircle, Minus, Plus, XCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShoppingCart from '@/components/ShoppingCart';

const placeholderImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzc0MTUxIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pgo8L3N2Zz4K";

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = useCallback(async () => {
    if (product && selectedVariant) {
      const availableQuantity = selectedVariant.inventory_quantity;
      try {
        await addToCart(product, selectedVariant, quantity, availableQuantity);
        toast({
          title: "Ajouté au panier! 🛒",
          description: `${quantity} x ${product.title} (${selectedVariant.title}) ajouté.`,
        });
        setIsCartOpen(true);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Oups! Une erreur est survenue.",
          description: error.message,
        });
      }
    }
  }, [product, selectedVariant, quantity, addToCart, toast]);

  const handleQuantityChange = useCallback((amount) => {
    setQuantity(prevQuantity => {
        const newQuantity = prevQuantity + amount;
        if (newQuantity < 1) return 1;
        return newQuantity;
    });
  }, []);

  const handlePrevImage = useCallback(() => {
    if (product?.images?.length > 1) {
      setCurrentImageIndex(prev => prev === 0 ? product.images.length - 1 : prev - 1);
    }
  }, [product?.images?.length]);

  const handleNextImage = useCallback(() => {
    if (product?.images?.length > 1) {
      setCurrentImageIndex(prev => prev === product.images.length - 1 ? 0 : prev + 1);
    }
  }, [product?.images?.length]);

  const handleVariantSelect = useCallback((variant) => {
    setSelectedVariant(variant);

    if (variant.image_url && product?.images?.length > 0) {
      const imageIndex = product.images.findIndex(image => image.url === variant.image_url);

      if (imageIndex !== -1) {
        setCurrentImageIndex(imageIndex);
      }
    }
  }, [product?.images]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedProduct = await getProduct(id);

        try {
          const quantitiesResponse = await getProductQuantities({
            fields: 'inventory_quantity',
            product_ids: [fetchedProduct.id]
          });

          const variantQuantityMap = new Map();
          quantitiesResponse.variants.forEach(variant => {
            variantQuantityMap.set(variant.id, variant.inventory_quantity);
          });

          const productWithQuantities = {
            ...fetchedProduct,
            variants: fetchedProduct.variants.map(variant => ({
              ...variant,
              inventory_quantity: variantQuantityMap.get(variant.id) ?? variant.inventory_quantity
            }))
          };

          setProduct(productWithQuantities);

          if (productWithQuantities.variants && productWithQuantities.variants.length > 0) {
            setSelectedVariant(productWithQuantities.variants[0]);
          }
        } catch (quantityError) {
          throw quantityError;
        }
      } catch (err) {
        setError(err.message || 'Impossible de charger le produit');
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header setIsCartOpen={setIsCartOpen} />
        <div className="flex-grow flex justify-center items-center">
          <Loader2 className="h-16 w-16 text-fce-green animate-spin" />
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header setIsCartOpen={setIsCartOpen} />
        <main className="flex-grow container mx-auto px-4 pt-32 pb-20">
          <Link to="/boutique" className="inline-flex items-center gap-2 text-fce-green hover:text-fce-orange transition-colors mb-6 font-bold">
            <ArrowLeft size={16} />
            Retour à la boutique
          </Link>
          <div className="text-center text-red-500 p-8 bg-white rounded-2xl shadow-lg border border-red-100">
            <XCircle className="mx-auto h-16 w-16 mb-4" />
            <p className="mb-6 font-medium">Erreur: {error}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const price = selectedVariant?.sale_price_formatted ?? selectedVariant?.price_formatted;
  const originalPrice = selectedVariant?.price_formatted;
  const availableStock = selectedVariant ? selectedVariant.inventory_quantity : 0;
  const isStockManaged = selectedVariant?.manage_inventory ?? false;
  const canAddToCart = !isStockManaged || quantity <= availableStock;

  const currentImage = product.images[currentImageIndex];
  const hasMultipleImages = product.images.length > 1;

  return (
    <>
      <Helmet>
        <title>{product.title} | Boutique Facture</title>
        <meta name="description" content={product.description?.substring(0, 160) || product.title} />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header setIsCartOpen={setIsCartOpen} />
        <ShoppingCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />

        <main className="flex-grow container mx-auto px-4 pt-32 pb-20">
          <Link to="/boutique" className="inline-flex items-center gap-2 text-fce-green hover:text-fce-orange transition-colors mb-6 font-bold">
            <ArrowLeft size={16} />
            Retour à la boutique
          </Link>

          <div className="grid md:grid-cols-2 gap-12 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            
            {/* Image Gallery */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5 }} 
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-square border border-gray-100">
                <img
                  src={!currentImage?.url ? placeholderImage : currentImage.url}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />

                {hasMultipleImages && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-fce-green p-2 rounded-full transition-colors shadow-md backdrop-blur-sm"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-fce-green p-2 rounded-full transition-colors shadow-md backdrop-blur-sm"
                      aria-label="Next image"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {product.ribbon_text && (
                  <div className="absolute top-4 left-4 bg-fce-orange text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                    {product.ribbon_text}
                  </div>
                )}
              </div>

              {hasMultipleImages && (
                <div className="flex gap-3 mt-4 overflow-x-auto pb-2 px-1">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex ? 'border-fce-orange ring-2 ring-fce-orange/20 scale-105' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={!image.url ? placeholderImage : image.url}
                        alt={`${product.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Details */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.5, delay: 0.2 }} 
              className="flex flex-col"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-serif">{product.title}</h1>
              {product.subtitle && (
                <p className="text-lg text-gray-500 mb-6 font-medium">{product.subtitle}</p>
              )}

              <div className="flex items-baseline gap-3 mb-8 pb-6 border-b border-gray-100">
                <span className="text-4xl font-bold text-fce-green">{price}</span>
                {selectedVariant?.sale_price_in_cents && (
                  <span className="text-2xl text-gray-400 line-through decoration-fce-orange">{originalPrice}</span>
                )}
              </div>

              <div className="prose prose-sm md:prose-base text-gray-600 mb-8 max-w-none" dangerouslySetInnerHTML={{ __html: product.description }} />

              {product.variants.length > 1 && (
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide mb-3">Variante</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.variants.map(variant => (
                      <Button
                        key={variant.id}
                        variant={selectedVariant?.id === variant.id ? 'default' : 'outline'}
                        onClick={() => handleVariantSelect(variant)}
                        className={`transition-all ${
                          selectedVariant?.id === variant.id 
                            ? 'bg-fce-green hover:bg-fce-green/90 text-white border-transparent shadow-md' 
                            : 'border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900'
                        }`}
                      >
                        {variant.title}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                <div className="flex items-center border border-gray-200 rounded-full p-1 bg-gray-50">
                  <Button onClick={() => handleQuantityChange(-1)} variant="ghost" size="icon" className="rounded-full h-10 w-10 text-gray-600 hover:bg-white hover:text-fce-orange hover:shadow-sm transition-all"><Minus size={18} /></Button>
                  <span className="w-12 text-center text-gray-900 font-bold text-lg">{quantity}</span>
                  <Button onClick={() => handleQuantityChange(1)} variant="ghost" size="icon" className="rounded-full h-10 w-10 text-gray-600 hover:bg-white hover:text-fce-orange hover:shadow-sm transition-all"><Plus size={18} /></Button>
                </div>
                
                <Button 
                  onClick={handleAddToCart} 
                  size="lg" 
                  className="flex-grow w-full sm:w-auto bg-gradient-to-r from-fce-green to-fce-lightGreen hover:from-fce-lightGreen hover:to-fce-green text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0" 
                  disabled={!canAddToCart || !product.purchasable}
                >
                  <ShoppingCartIcon className="mr-2 h-5 w-5" /> Ajouter au panier
                </Button>
              </div>

              {/* Stock Status */}
              <div className="mt-auto pt-4 border-t border-gray-100">
                {isStockManaged && canAddToCart && product.purchasable && (
                  <p className="text-sm text-green-600 flex items-center gap-2 font-medium">
                    <CheckCircle size={16} /> En stock ({availableStock} disponibles)
                  </p>
                )}

                {isStockManaged && !canAddToCart && product.purchasable && (
                   <p className="text-sm text-amber-600 flex items-center gap-2 font-medium">
                    <XCircle size={16} /> Stock insuffisant. Seulement {availableStock} restants.
                  </p>
                )}

                {!product.purchasable && (
                    <p className="text-sm text-red-500 flex items-center gap-2 font-medium">
                      <XCircle size={16} /> Actuellement indisponible
                    </p>
                )}
              </div>

            </motion.div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

export default ProductDetailPage;