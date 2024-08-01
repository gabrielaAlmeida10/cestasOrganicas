let consumidores = [];
let produtos = [];
let pedidos = [];

//cadastro de pessoa consumidora
function cadastrarConsumidor() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let photo = document.getElementById("photo").value;

  let consumidor = {
    name: name,
    email: email,
    address: address,
    photo: photo,
  };

  consumidores.push(consumidor);

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("address").value = "";
  document.getElementById("photo").value = "";

  console.log(consumidores);
}

//cadastro de produto
function cadastrarProduto() {
  let name = document.getElementById("productName").value;
  let image = document.getElementById("productImage").value;
  let price = parseFloat(document.getElementById("productPrice").value);

  let produto = {
    name: name,
    image: image,
    price: price,
  };

  produtos.push(produto);

  document.getElementById("productName").value = "";
  document.getElementById("productImage").value = " ";
  document.getElementById("productPrice").value = "";

  console.log(produtos);
}

//adicionar produto no pedido
function adicionarProduto() {
  const productSelect = document.getElementById('product');
  const selectedProduct = productSelect.options[productSelect.selectedIndex].text;
  const productTableBody = document.getElementById('productTableBody');

  const row = document.createElement('tr');
  row.innerHTML = `
      <td>${selectedProduct}</td>
      <td>1</td>
      <td>
          <button class="edit-btn" onclick="editarQuantidade(this)">
              <img src="./images/edit.jpg" alt="Editar">
          </button>
          <button onclick="removerProduto(this)">
              <img src="./images/delete.png" alt="Remover">
          </button>
      </td>
  `;

  productTableBody.appendChild(row);
}

//editar quantidade do produto no pedido
function editarQuantidade(button) {
  const row = button.parentElement.parentElement;
  const quantityCell = row.cells[1];
  const quantity = prompt('Digite a nova quantidade:', quantityCell.textContent);
  if (quantity !== null && quantity > 0) {
      quantityCell.textContent = quantity;
  }
}

function removerProduto(button) {
  const row = button.parentElement.parentElement;
  row.parentElement.removeChild(row);
}

function cadastrarPedido(event) {
  event.preventDefault();
  const customerName = document.getElementById('customerName').value;
  const products = Array.from(document.getElementById('productTableBody').children).map(row => {
      return {
          product: row.cells[0].textContent,
          quantity: parseInt(row.cells[1].textContent)
      };
  });
  const orderDate = document.getElementById('orderDate').value;

  let pedido = {
      customerName: customerName,
      products: products,
      orderDate: orderDate
  };

  pedidos.push(pedido);

  document.getElementById('customerName').value = '';
  document.getElementById('orderDate').value = '';
  document.getElementById('productTableBody').innerHTML = '';

  console.log(pedidos);
}
