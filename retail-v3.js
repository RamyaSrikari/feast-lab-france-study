(function(){
  const collection=document.querySelector('#collection');
  document.querySelectorAll('[data-shop-category]').forEach(link=>link.addEventListener('click',()=>{
    window.feastSetCategory?.(link.dataset.shopCategory);
    setTimeout(()=>collection?.scrollIntoView({behavior:'smooth',block:'start'}),20);
  }));
  const form=document.querySelector('#global-search-form');
  const globalSearch=document.querySelector('#global-search');
  form?.addEventListener('submit',event=>{
    event.preventDefault();window.feastSearch?.(globalSearch.value);collection?.scrollIntoView({behavior:'smooth',block:'start'});
  });
  globalSearch?.addEventListener('input',()=>{if(globalSearch.value.length>1)window.feastSearch?.(globalSearch.value)});
  document.querySelector('#open-wishlist')?.addEventListener('click',()=>{window.feastShowWishlist?.();collection?.scrollIntoView({behavior:'smooth',block:'start'});});
  document.querySelector('#mobile-cart')?.addEventListener('click',()=>document.querySelector('#open-cart')?.click());
})();
