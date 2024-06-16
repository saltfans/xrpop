"use client"
import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product, ProductVariant } from 'lib/shopify/types';
import { useEffect, useRef, useState } from 'react';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(product.variants[0]);

   // Adding a ref to keep track of the current product
   const currentProductIdRef = useRef(product.id);
   
   useEffect(() => {
    if (currentProductIdRef.current !== product.id) {
      // Update the ref with the new product id
      currentProductIdRef.current = product.id;
      // Only update selectedVariant if the product has changed
      setSelectedVariant(product.variants[0]);
    }
  }, [product]);

  const handleVariantChange = (variant: ProductVariant) => {
    setSelectedVariant(variant);
    console.log("Variant selected:", variant);
  };

  const variantPrice = selectedVariant?.price.amount ?? product.priceRange.minVariantPrice.amount;
  const compareAtPrice = selectedVariant?.compareAtPrice?.amount;

  console.log("jkj", variantPrice);
  console.log("compareatprice:", compareAtPrice);
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{product.title}</h1>
        <div className="mr-auto w-auto rounded-full dark:bg-gray-800 border-2 border-green-600 p-2 text-sm text-white">
          <Price
            amount={variantPrice}
            compareAtAmount={compareAtPrice}  
            sale={product.availableForSale}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>
      <VariantSelector
        options={product.options}
        variants={product.variants}
        selectedVariant={selectedVariant}
        onVariantChange={handleVariantChange}
      />
      
      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null}

      <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
    </>
  );
}
