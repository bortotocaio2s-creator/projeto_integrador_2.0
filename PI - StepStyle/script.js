const products = [
    {
      id:1,
      title:"Bonés",
      price:"R$ 89,90",
      img:"src/assets/images/Bone-Gucci.jpeg",
      badge:"NEW"
    },
    {
      id:2,
      title:"Calças Cargo",
      price:"R$ 129,90",
      img:"src/assets/images/Calca-cargo.jpeg",
      badge:"SALE"
    },
    {
      id:3,
      title:"Calça Jogger",
      price:"R$ 119,90",
      img:"src/assets/images/Calca-jogger.jpeg",
      badge:null
    },
    {
      id:4,
      title:"Shoulder Bag",
      price:"R$ 99,90",
      img:"src/assets/images/shoulder-bag.jpeg",
      badge:null
    }
  ];
  
  function renderProducts(){
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    products.forEach(p=>{
      const card = document.createElement('article');
      card.className = 'product-card';
      card.innerHTML = `
        ${p.badge ? `<div class="badge ${p.badge.toLowerCase()}">${p.badge}</div>` : ''}
        <img src="${p.img}" alt="${p.title}" />
        <div class="product-meta">
          <div class="product-title">${p.title}</div>
          <div class="product-price">${p.price}</div>
        </div>
        <div class="product-actions">
          <button class="btn ghost" onclick="addToCart(${p.id})">Adicionar</button>
          <div class="icon-like">♡</div>
        </div>
      `;
      grid.appendChild(card);
    });
  }
  
  function addToCart(id){
    const p = products.find(x=>x.id===id);
    alert(`${p.title} adicionado ao carrinho (simulado).`);
  }
  
  document.addEventListener('DOMContentLoaded', renderProducts);
  