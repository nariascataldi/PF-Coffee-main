import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
  {
  "id": 8,
  "title": "Caramel Frappuccino",
  "price": 300,
  "description": "Licuado de jarabe de caramelo, café, hielo y leche. Cubierto de crema batida y salsa de caramelo con mantequilla.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662575016/small_cafe_09_0dace480d5.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [
  {
  "id": 3,
  "name": "dairy free",
  "diet_product": {}
  }
  ],
  "categories": [],
  "providers": [
  {
  "id": 8,
  "name": "Cafeteria Sunset",
  "mail": "SunsetRiders@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 789, Córdoba.",
  "phone": "954565369697",
  "CUIT": "3278965478596",
  "disable": false,
  "product_provider": {}
  },
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.160Z",
  "updatedAt": "2022-09-21T05:48:50.160Z",
  "productId": 8,
  "providerId": 9
  }
  }
  ]
  },
  {
  "id": 14,
  "title": "Latte de vainilla",
  "price": 300,
  "description": "Café espresso con caramelo, leche descremada al vapor y toques de canela.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662575620/small_cafe_14_cd3046e9bb.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [
  {
  "id": 2,
  "name": "sugar free",
  "diet_product": {
  "createdAt": "2022-09-21T05:48:50.220Z",
  "updatedAt": "2022-09-21T05:48:50.220Z",
  "productId": 14,
  "dietId": 2
  }
  }
  ],
  "categories": [
  {
  "id": 1,
  "name": "coffees",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.117Z",
  "updatedAt": "2022-09-21T05:48:50.117Z",
  "productId": 14,
  "categoryId": 1
  }
  }
  ],
  "providers": [
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.161Z",
  "updatedAt": "2022-09-21T05:48:50.161Z",
  "productId": 14,
  "providerId": 9
  }
  },
  {
  "id": 8,
  "name": "Cafeteria Sunset",
  "mail": "SunsetRiders@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 789, Córdoba.",
  "phone": "954565369697",
  "CUIT": "3278965478596",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.161Z",
  "updatedAt": "2022-09-21T05:48:50.161Z",
  "productId": 14,
  "providerId": 8
  }
  }
  ]
  },
  {
  "id": 15,
  "title": "Donuts chocolatey",
  "price": 500,
  "description": "3 uds. de donas con baño y chispas de chocolate.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662577959/small_donas_01_50adc4cd3c.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [
  {
  "id": 1,
  "name": "gluten free",
  "diet_product": {
  "createdAt": "2022-09-21T05:48:50.220Z",
  "updatedAt": "2022-09-21T05:48:50.220Z",
  "productId": 15,
  "dietId": 1
  }
  },
  {
  "id": 2,
  "name": "sugar free",
  "diet_product": {
  "createdAt": "2022-09-21T05:48:50.221Z",
  "updatedAt": "2022-09-21T05:48:50.221Z",
  "productId": 15,
  "dietId": 2
  }
  },
  {
  "id": 5,
  "name": "vegetarian",
  "diet_product": {
  "createdAt": "2022-09-21T05:48:50.221Z",
  "updatedAt": "2022-09-21T05:48:50.221Z",
  "productId": 15,
  "dietId": 5
  }
  }
  ],
  "categories": [
  {
  "id": 2,
  "name": "donuts",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.117Z",
  "updatedAt": "2022-09-21T05:48:50.117Z",
  "productId": 15,
  "categoryId": 2
  }
  }
  ],
  "providers": [
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.162Z",
  "updatedAt": "2022-09-21T05:48:50.162Z",
  "productId": 15,
  "providerId": 7
  }
  },
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.162Z",
  "updatedAt": "2022-09-21T05:48:50.162Z",
  "productId": 15,
  "providerId": 9
  }
  }
  ]
  },
  {
  "id": 23,
  "title": "Crispy Donuts",
  "price": 550,
  "description": "3 uds. de donas bañadas de chocolate amargo y crocantes de almendras.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584898/small_donas_09_baa9035814.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [
  {
  "id": 2,
  "name": "sugar free",
  "diet_product": {
  "createdAt": "2022-09-21T05:48:50.223Z",
  "updatedAt": "2022-09-21T05:48:50.223Z",
  "productId": 23,
  "dietId": 2
  }
  },
  {
  "id": 1,
  "name": "gluten free",
  "diet_product": {
  "createdAt": "2022-09-21T05:48:50.224Z",
  "updatedAt": "2022-09-21T05:48:50.224Z",
  "productId": 23,
  "dietId": 1
  }
  },
  {
  "id": 5,
  "name": "vegetarian",
  "diet_product": {
  "createdAt": "2022-09-21T05:48:50.224Z",
  "updatedAt": "2022-09-21T05:48:50.224Z",
  "productId": 23,
  "dietId": 5
  }
  }
  ],
  "categories": [
  {
  "id": 2,
  "name": "donuts",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.122Z",
  "updatedAt": "2022-09-21T05:48:50.122Z",
  "productId": 23,
  "categoryId": 2
  }
  }
  ],
  "providers": [
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.163Z",
  "updatedAt": "2022-09-21T05:48:50.163Z",
  "productId": 23,
  "providerId": 9
  }
  },
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.164Z",
  "updatedAt": "2022-09-21T05:48:50.164Z",
  "productId": 23,
  "providerId": 7
  }
  }
  ]
  },
  {
  "id": 28,
  "title": "Cookie avena y chocolate",
  "price": 250,
  "description": "Paquete de 4 galletas de chocolate y avena.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662589872/small_galletas_02_0a70a5ad2a.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [
  {
  "id": 1,
  "name": "gluten free",
  "diet_product": {
  "createdAt": "2022-09-21T05:48:50.226Z",
  "updatedAt": "2022-09-21T05:48:50.226Z",
  "productId": 28,
  "dietId": 1
  }
  },
  {
  "id": 2,
  "name": "sugar free",
  "diet_product": {
  "createdAt": "2022-09-21T05:48:50.226Z",
  "updatedAt": "2022-09-21T05:48:50.226Z",
  "productId": 28,
  "dietId": 2
  }
  },
  {
  "id": 5,
  "name": "vegetarian",
  "diet_product": {
  "createdAt": "2022-09-21T05:48:50.227Z",
  "updatedAt": "2022-09-21T05:48:50.227Z",
  "productId": 28,
  "dietId": 5
  }
  }
  ],
  "categories": [
  {
  "id": 3,
  "name": "cookie",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.124Z",
  "updatedAt": "2022-09-21T05:48:50.124Z",
  "productId": 28,
  "categoryId": 3
  }
  }
  ],
  "providers": [
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.166Z",
  "updatedAt": "2022-09-21T05:48:50.166Z",
  "productId": 28,
  "providerId": 7
  }
  },
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.166Z",
  "updatedAt": "2022-09-21T05:48:50.166Z",
  "productId": 28,
  "providerId": 9
  }
  },
  {
  "id": 2,
  "name": "Panaderia PRINCESS",
  "mail": "princess_pana@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663103598/2251afaaf01643609875773b72409974_9b83b73899.png",
  "adress": "Av. Siempre Viva 1589, Córdoba.",
  "phone": "54935189657412",
  "CUIT": "3248965712595",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.166Z",
  "updatedAt": "2022-09-21T05:48:50.166Z",
  "productId": 28,
  "providerId": 2
  }
  }
  ]
  },
  {
  "id": 35,
  "title": "Lemon Pie",
  "price": 330,
  "description": "Porción de tarta de limón.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662725481/small_pastel_04_a262c2441d.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [
  {
  "id": 1,
  "name": "gluten free",
  "diet_product": {
  "createdAt": "2022-09-21T05:48:50.233Z",
  "updatedAt": "2022-09-21T05:48:50.233Z",
  "productId": 35,
  "dietId": 1
  }
  }
  ],
  "categories": [
  {
  "id": 4,
  "name": "cakes",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.126Z",
  "updatedAt": "2022-09-21T05:48:50.126Z",
  "productId": 35,
  "categoryId": 4
  }
  }
  ],
  "providers": [
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.168Z",
  "updatedAt": "2022-09-21T05:48:50.168Z",
  "productId": 35,
  "providerId": 7
  }
  },
  {
  "id": 2,
  "name": "Panaderia PRINCESS",
  "mail": "princess_pana@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663103598/2251afaaf01643609875773b72409974_9b83b73899.png",
  "adress": "Av. Siempre Viva 1589, Córdoba.",
  "phone": "54935189657412",
  "CUIT": "3248965712595",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.168Z",
  "updatedAt": "2022-09-21T05:48:50.168Z",
  "productId": 35,
  "providerId": 2
  }
  }
  ]
  },
  {
  "id": 40,
  "title": "Spicy",
  "price": 1200,
  "description": "Pizza Spicy con doble queso, cebolla y tomates cherry.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662726767/small_pizzas_01_2bb0a27d15.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [
  {
  "id": 5,
  "name": "vegetarian",
  "diet_product": {
  "createdAt": "2022-09-21T05:48:50.237Z",
  "updatedAt": "2022-09-21T05:48:50.237Z",
  "productId": 40,
  "dietId": 5
  }
  }
  ],
  "categories": [
  {
  "id": 5,
  "name": "pizza",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.127Z",
  "updatedAt": "2022-09-21T05:48:50.127Z",
  "productId": 40,
  "categoryId": 5
  }
  }
  ],
  "providers": [
  {
  "id": 2,
  "name": "Panaderia PRINCESS",
  "mail": "princess_pana@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663103598/2251afaaf01643609875773b72409974_9b83b73899.png",
  "adress": "Av. Siempre Viva 1589, Córdoba.",
  "phone": "54935189657412",
  "CUIT": "3248965712595",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.169Z",
  "updatedAt": "2022-09-21T05:48:50.169Z",
  "productId": 40,
  "providerId": 2
  }
  }
  ]
  },
  {
  "id": 44,
  "title": "Doble Queso",
  "price": 1200,
  "description": "Pizza con doble queso muzzarella.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662727035/small_pizzas_03_c5034b41eb.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [
  {
  "id": 5,
  "name": "vegetarian",
  "diet_product": {
  "createdAt": "2022-09-21T05:48:50.240Z",
  "updatedAt": "2022-09-21T05:48:50.240Z",
  "productId": 44,
  "dietId": 5
  }
  }
  ],
  "categories": [
  {
  "id": 5,
  "name": "pizza",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.131Z",
  "updatedAt": "2022-09-21T05:48:50.131Z",
  "productId": 44,
  "categoryId": 5
  }
  }
  ],
  "providers": [
  {
  "id": 2,
  "name": "Panaderia PRINCESS",
  "mail": "princess_pana@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663103598/2251afaaf01643609875773b72409974_9b83b73899.png",
  "adress": "Av. Siempre Viva 1589, Córdoba.",
  "phone": "54935189657412",
  "CUIT": "3248965712595",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.172Z",
  "updatedAt": "2022-09-21T05:48:50.172Z",
  "productId": 44,
  "providerId": 2
  }
  }
  ]
  },
  {
  "id": 49,
  "title": "Olive",
  "price": 1200,
  "description": "Pizza con muzzarella y cubierta de aceitunas negras.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662728130/small_pizzas_10_f2b31c0097.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [
  {
  "id": 1,
  "name": "gluten free",
  "diet_product": {
  "createdAt": "2022-09-21T05:48:50.240Z",
  "updatedAt": "2022-09-21T05:48:50.240Z",
  "productId": 49,
  "dietId": 1
  }
  },
  {
  "id": 5,
  "name": "vegetarian",
  "diet_product": {
  "createdAt": "2022-09-21T05:48:50.240Z",
  "updatedAt": "2022-09-21T05:48:50.240Z",
  "productId": 49,
  "dietId": 5
  }
  }
  ],
  "categories": [
  {
  "id": 5,
  "name": "pizza",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.132Z",
  "updatedAt": "2022-09-21T05:48:50.132Z",
  "productId": 49,
  "categoryId": 5
  }
  }
  ],
  "providers": [
  {
  "id": 2,
  "name": "Panaderia PRINCESS",
  "mail": "princess_pana@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663103598/2251afaaf01643609875773b72409974_9b83b73899.png",
  "adress": "Av. Siempre Viva 1589, Córdoba.",
  "phone": "54935189657412",
  "CUIT": "3248965712595",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.173Z",
  "updatedAt": "2022-09-21T05:48:50.173Z",
  "productId": 49,
  "providerId": 2
  }
  }
  ]
  },
  {
  "id": 47,
  "title": "Vegetarian",
  "price": 1200,
  "description": "Pizza con vegetales y queso.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662727867/small_pizzas_08_e5d52bea8b.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [
  {
  "id": 5,
  "name": "vegetarian",
  "diet_product": {
  "createdAt": "2022-09-21T05:48:50.240Z",
  "updatedAt": "2022-09-21T05:48:50.240Z",
  "productId": 47,
  "dietId": 5
  }
  }
  ],
  "categories": [
  {
  "id": 5,
  "name": "pizza",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.132Z",
  "updatedAt": "2022-09-21T05:48:50.132Z",
  "productId": 47,
  "categoryId": 5
  }
  }
  ],
  "providers": [
  {
  "id": 2,
  "name": "Panaderia PRINCESS",
  "mail": "princess_pana@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663103598/2251afaaf01643609875773b72409974_9b83b73899.png",
  "adress": "Av. Siempre Viva 1589, Córdoba.",
  "phone": "54935189657412",
  "CUIT": "3248965712595",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.172Z",
  "updatedAt": "2022-09-21T05:48:50.172Z",
  "productId": 47,
  "providerId": 2
  }
  }
  ]
  },
  {
  "id": 70,
  "title": "Manzana y limón",
  "price": 300,
  "description": "Combinar una parte de té verde con una de jugo de manzana clarificado y un chorrito de jugo de limón. El sabor resultará frutal, gustoso y con la aromática base \nde la infusión. Puedes incorporar un poco de canela y trozos de manzana para potenciar el sabor.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663081860/small_47866586_l_1_696x469_43d5defad3.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [
  {
  "id": 2,
  "name": "sugar free",
  "diet_product": {
  "createdAt": "2022-09-21T05:48:50.244Z",
  "updatedAt": "2022-09-21T05:48:50.244Z",
  "productId": 70,
  "dietId": 2
  }
  }
  ],
  "categories": [
  {
  "id": 8,
  "name": "cold-drinks",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.141Z",
  "updatedAt": "2022-09-21T05:48:50.141Z",
  "productId": 70,
  "categoryId": 8
  }
  }
  ],
  "providers": [
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.181Z",
  "updatedAt": "2022-09-21T05:48:50.181Z",
  "productId": 70,
  "providerId": 9
  }
  }
  ]
  },
  {
  "id": 65,
  "title": "Te verde y durazno",
  "price": 300,
  "description": "En vez de disfrutarlo en productos artificiales, dale a tu té natural un toque de auténtico jugo de durazno. Anímate a endulzar con el almíbar de melocotones enlatados para más aroma.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663081498/small_te_verde_y_durazno_6a2d8b3c2a.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [
  {
  "id": 2,
  "name": "sugar free",
  "diet_product": {
  "createdAt": "2022-09-21T05:48:50.243Z",
  "updatedAt": "2022-09-21T05:48:50.243Z",
  "productId": 65,
  "dietId": 2
  }
  }
  ],
  "categories": [
  {
  "id": 8,
  "name": "cold-drinks",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.137Z",
  "updatedAt": "2022-09-21T05:48:50.137Z",
  "productId": 65,
  "categoryId": 8
  }
  }
  ],
  "providers": [
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.177Z",
  "updatedAt": "2022-09-21T05:48:50.177Z",
  "productId": 65,
  "providerId": 9
  }
  }
  ]
  },
  {
  "id": 89,
  "title": "Tabla Caprese",
  "price": 600,
  "description": "Rodajas de tomate y queso Reggianito, aceite de oliva y albahaca fresca. Ideal para acompañar alguna de nuetras opciones anteriores.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663098081/small_picada_Caprese_b7d601a788.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [
  {
  "id": 5,
  "name": "vegetarian",
  "diet_product": {
  "createdAt": "2022-09-21T05:48:50.246Z",
  "updatedAt": "2022-09-21T05:48:50.246Z",
  "productId": 89,
  "dietId": 5
  }
  }
  ],
  "categories": [
  {
  "id": 11,
  "name": "picadas",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.146Z",
  "updatedAt": "2022-09-21T05:48:50.146Z",
  "productId": 89,
  "categoryId": 11
  }
  }
  ],
  "providers": [
  {
  "id": 3,
  "name": "Frigorifico Ciram",
  "mail": "FriCiram@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663104880/2251afaaf01643609875773b72409974_3_47a737b240.png",
  "adress": "Av. Fuerza Aerea Argentina 2400",
  "phone": "935187896541",
  "CUIT": "3289654785266",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.186Z",
  "updatedAt": "2022-09-21T05:48:50.186Z",
  "productId": 89,
  "providerId": 3
  }
  }
  ]
  },
  {
  "id": 91,
  "title": "Tabla de quesos",
  "price": 800,
  "description": "Rodajas de queso Parmesano, trozos de queso Holandés o Gouda, queso Roquefort, con el toque de uvas pasas.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663099030/picada_de_quesos_268b51ce7d.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [
  {
  "id": 5,
  "name": "vegetarian",
  "diet_product": {
  "createdAt": "2022-09-21T05:48:50.246Z",
  "updatedAt": "2022-09-21T05:48:50.246Z",
  "productId": 91,
  "dietId": 5
  }
  }
  ],
  "categories": [
  {
  "id": 11,
  "name": "picadas",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.146Z",
  "updatedAt": "2022-09-21T05:48:50.146Z",
  "productId": 91,
  "categoryId": 11
  }
  }
  ],
  "providers": [
  {
  "id": 3,
  "name": "Frigorifico Ciram",
  "mail": "FriCiram@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663104880/2251afaaf01643609875773b72409974_3_47a737b240.png",
  "adress": "Av. Fuerza Aerea Argentina 2400",
  "phone": "935187896541",
  "CUIT": "3289654785266",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.188Z",
  "updatedAt": "2022-09-21T05:48:50.188Z",
  "productId": 91,
  "providerId": 3
  }
  }
  ]
  },
  {
  "id": 96,
  "title": "Coca-Cola Zero",
  "price": 300,
  "description": "Gaseosa Coca-Cola cero azúcar - 500ml",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663113515/small_Coca_Cola_Zero_Azucar_botella_500ml_vaso_blanco_New_1_a9bb649625.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [
  {
  "id": 2,
  "name": "sugar free",
  "diet_product": {
  "createdAt": "2022-09-21T05:48:50.246Z",
  "updatedAt": "2022-09-21T05:48:50.246Z",
  "productId": 96,
  "dietId": 2
  }
  }
  ],
  "categories": [
  {
  "id": 10,
  "name": "gaseosas-aguas",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.147Z",
  "updatedAt": "2022-09-21T05:48:50.147Z",
  "productId": 96,
  "categoryId": 10
  }
  }
  ],
  "providers": [
  {
  "id": 8,
  "name": "Cafeteria Sunset",
  "mail": "SunsetRiders@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 789, Córdoba.",
  "phone": "954565369697",
  "CUIT": "3278965478596",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.189Z",
  "updatedAt": "2022-09-21T05:48:50.189Z",
  "productId": 96,
  "providerId": 8
  }
  }
  ]
  },
  {
  "id": 100,
  "title": "Agua Mineral",
  "price": 200,
  "description": "Agua Mineral -aquaBona 500ml.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663113700/small_Aquabona_botella_500ml_blanco_1_bfd2f8abf3.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [
  {
  "id": 2,
  "name": "sugar free",
  "diet_product": {
  "createdAt": "2022-09-21T05:48:50.247Z",
  "updatedAt": "2022-09-21T05:48:50.247Z",
  "productId": 100,
  "dietId": 2
  }
  }
  ],
  "categories": [
  {
  "id": 10,
  "name": "gaseosas-aguas",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.148Z",
  "updatedAt": "2022-09-21T05:48:50.148Z",
  "productId": 100,
  "categoryId": 10
  }
  }
  ],
  "providers": [
  {
  "id": 8,
  "name": "Cafeteria Sunset",
  "mail": "SunsetRiders@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 789, Córdoba.",
  "phone": "954565369697",
  "CUIT": "3278965478596",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.191Z",
  "updatedAt": "2022-09-21T05:48:50.191Z",
  "productId": 100,
  "providerId": 8
  }
  }
  ]
  },
  {
  "id": 99,
  "title": "Coca-Cola Light",
  "price": 300,
  "description": "Gaseosa Coca-Cola Light - 500ml",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663113629/small_Coca_Cola_Sabor_Light_botella_500ml_vaso_blanco_1_d963f9b587.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [
  {
  "id": 2,
  "name": "sugar free",
  "diet_product": {
  "createdAt": "2022-09-21T05:48:50.249Z",
  "updatedAt": "2022-09-21T05:48:50.249Z",
  "productId": 99,
  "dietId": 2
  }
  }
  ],
  "categories": [
  {
  "id": 10,
  "name": "gaseosas-aguas",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.150Z",
  "updatedAt": "2022-09-21T05:48:50.150Z",
  "productId": 99,
  "categoryId": 10
  }
  }
  ],
  "providers": [
  {
  "id": 8,
  "name": "Cafeteria Sunset",
  "mail": "SunsetRiders@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 789, Córdoba.",
  "phone": "954565369697",
  "CUIT": "3278965478596",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.195Z",
  "updatedAt": "2022-09-21T05:48:50.195Z",
  "productId": 99,
  "providerId": 8
  }
  }
  ]
  },
  {
  "id": 102,
  "title": "Ice Mango ",
  "price": 500,
  "description": "Copa de helado de mango, mascarpone y chocolate con flan.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663115468/small_helado_son_flan_d67dcdc738.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [
  {
  "id": 4,
  "name": "vegan",
  "diet_product": {
  "createdAt": "2022-09-21T05:48:50.249Z",
  "updatedAt": "2022-09-21T05:48:50.249Z",
  "productId": 102,
  "dietId": 4
  }
  }
  ],
  "categories": [
  {
  "id": 12,
  "name": "ice-cream",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.150Z",
  "updatedAt": "2022-09-21T05:48:50.150Z",
  "productId": 102,
  "categoryId": 12
  }
  }
  ],
  "providers": [
  {
  "id": 8,
  "name": "Cafeteria Sunset",
  "mail": "SunsetRiders@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 789, Córdoba.",
  "phone": "954565369697",
  "CUIT": "3278965478596",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.196Z",
  "updatedAt": "2022-09-21T05:48:50.196Z",
  "productId": 102,
  "providerId": 8
  }
  },
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.196Z",
  "updatedAt": "2022-09-21T05:48:50.196Z",
  "productId": 102,
  "providerId": 7
  }
  }
  ]
  },
  {
  "id": 112,
  "title": "Cafesito",
  "price": 45678,
  "description": "kjhg",
  "image": "https://img-global.cpcdn.com/recipes/8e4ada7e89827ac2/1200x630cq70/photo.jpg",
  "disable": false,
  "like": 0,
  "stock": 4578,
  "sale_count": 0,
  "cost": 45,
  "margin": 54,
  "diets": [
  {
  "id": 3,
  "name": "dairy free",
  "diet_product": {
  "createdAt": "2022-09-21T05:58:16.330Z",
  "updatedAt": "2022-09-21T05:58:16.330Z",
  "productId": 112,
  "dietId": 3
  }
  }
  ],
  "categories": [],
  "providers": [
  {
  "id": 2,
  "name": "Panaderia PRINCESS",
  "mail": "princess_pana@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663103598/2251afaaf01643609875773b72409974_9b83b73899.png",
  "adress": "Av. Siempre Viva 1589, Córdoba.",
  "phone": "54935189657412",
  "CUIT": "3248965712595",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:58:16.331Z",
  "updatedAt": "2022-09-21T05:58:16.331Z",
  "productId": 112,
  "providerId": 2
  }
  }
  ]
  },
  {
  "id": 113,
  "title": "Agh",
  "price": 98,
  "description": "bhjk",
  "image": "https://img-global.cpcdn.com/recipes/8e4ada7e89827ac2/1200x630cq70/photo.jpg",
  "disable": false,
  "like": 0,
  "stock": 568,
  "sale_count": 0,
  "cost": 56,
  "margin": 65,
  "diets": [
  {
  "id": 5,
  "name": "vegetarian",
  "diet_product": {
  "createdAt": "2022-09-21T06:02:08.978Z",
  "updatedAt": "2022-09-21T06:02:08.978Z",
  "productId": 113,
  "dietId": 5
  }
  }
  ],
  "categories": [],
  "providers": [
  {
  "id": 3,
  "name": "Frigorifico Ciram",
  "mail": "FriCiram@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663104880/2251afaaf01643609875773b72409974_3_47a737b240.png",
  "adress": "Av. Fuerza Aerea Argentina 2400",
  "phone": "935187896541",
  "CUIT": "3289654785266",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T06:02:08.980Z",
  "updatedAt": "2022-09-21T06:02:08.980Z",
  "productId": 113,
  "providerId": 3
  }
  }
  ]
  },
  {
  "id": 114,
  "title": "Nestorito",
  "price": 867,
  "description": "ghv",
  "image": "https://img-global.cpcdn.com/recipes/8e4ada7e89827ac2/1200x630cq70/photo.jpg",
  "disable": false,
  "like": 0,
  "stock": 6543,
  "sale_count": 0,
  "cost": 56,
  "margin": 65,
  "diets": [
  {
  "id": 1,
  "name": "gluten free",
  "diet_product": {
  "createdAt": "2022-09-21T06:12:56.641Z",
  "updatedAt": "2022-09-21T06:12:56.641Z",
  "productId": 114,
  "dietId": 1
  }
  }
  ],
  "categories": [
  {
  "id": 4,
  "name": "cakes",
  "product_category": {
  "createdAt": "2022-09-21T06:12:56.645Z",
  "updatedAt": "2022-09-21T06:12:56.645Z",
  "productId": 114,
  "categoryId": 4
  }
  }
  ],
  "providers": [
  {
  "id": 3,
  "name": "Frigorifico Ciram",
  "mail": "FriCiram@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663104880/2251afaaf01643609875773b72409974_3_47a737b240.png",
  "adress": "Av. Fuerza Aerea Argentina 2400",
  "phone": "935187896541",
  "CUIT": "3289654785266",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T06:12:56.646Z",
  "updatedAt": "2022-09-21T06:12:56.646Z",
  "productId": 114,
  "providerId": 3
  }
  }
  ]
  },
  {
  "id": 115,
  "title": "Nestor",
  "price": 1000,
  "description": "kjhg",
  "image": "https://img-global.cpcdn.com/recipes/8e4ada7e89827ac2/1200x630cq70/photo.jpg",
  "disable": false,
  "like": 0,
  "stock": 5678,
  "sale_count": 0,
  "cost": 56,
  "margin": 76,
  "diets": [
  {
  "id": 2,
  "name": "sugar free",
  "diet_product": {
  "createdAt": "2022-09-21T06:37:03.701Z",
  "updatedAt": "2022-09-21T06:37:03.701Z",
  "productId": 115,
  "dietId": 2
  }
  }
  ],
  "categories": [
  {
  "id": 6,
  "name": "hamburguers",
  "product_category": {
  "createdAt": "2022-09-21T06:37:03.704Z",
  "updatedAt": "2022-09-21T06:37:03.704Z",
  "productId": 115,
  "categoryId": 6
  }
  }
  ],
  "providers": [
  {
  "id": 5,
  "name": "Cervezas Bear Creek",
  "mail": "cervezas_BearCreek@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105575/2251afaaf01643609875773b72409974_5_9214b25a24.png",
  "adress": "Los Nogales 589, Córdoba.",
  "phone": "9543517963258",
  "CUIT": "3278965412",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T06:37:03.705Z",
  "updatedAt": "2022-09-21T06:37:03.705Z",
  "productId": 115,
  "providerId": 5
  }
  }
  ]
  },
  {
  "id": 116,
  "title": "Hola",
  "price": 865,
  "description": "fghj",
  "image": "https://img-global.cpcdn.com/recipes/8e4ada7e89827ac2/1200x630cq70/photo.jpg",
  "disable": false,
  "like": 0,
  "stock": 5467,
  "sale_count": 0,
  "cost": 765,
  "margin": 6754,
  "diets": [
  {
  "id": 1,
  "name": "gluten free",
  "diet_product": {
  "createdAt": "2022-09-21T06:38:50.758Z",
  "updatedAt": "2022-09-21T06:38:50.758Z",
  "productId": 116,
  "dietId": 1
  }
  }
  ],
  "categories": [
  {
  "id": 1,
  "name": "coffees",
  "product_category": {
  "createdAt": "2022-09-21T06:38:50.762Z",
  "updatedAt": "2022-09-21T06:38:50.762Z",
  "productId": 116,
  "categoryId": 1
  }
  }
  ],
  "providers": [
  {
  "id": 5,
  "name": "Cervezas Bear Creek",
  "mail": "cervezas_BearCreek@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105575/2251afaaf01643609875773b72409974_5_9214b25a24.png",
  "adress": "Los Nogales 589, Córdoba.",
  "phone": "9543517963258",
  "CUIT": "3278965412",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T06:38:50.760Z",
  "updatedAt": "2022-09-21T06:38:50.760Z",
  "productId": 116,
  "providerId": 5
  }
  }
  ]
  },
  {
  "id": 117,
  "title": "Asda",
  "price": 8,
  "description": "jkhb",
  "image": "https://img-global.cpcdn.com/recipes/8e4ada7e89827ac2/1200x630cq70/photo.jpg",
  "disable": false,
  "like": 0,
  "stock": 6,
  "sale_count": 0,
  "cost": 7,
  "margin": 4,
  "diets": [
  {
  "id": 4,
  "name": "vegan",
  "diet_product": {
  "createdAt": "2022-09-21T06:42:34.968Z",
  "updatedAt": "2022-09-21T06:42:34.968Z",
  "productId": 117,
  "dietId": 4
  }
  }
  ],
  "categories": [
  {
  "id": 7,
  "name": "coffee-boxes",
  "product_category": {
  "createdAt": "2022-09-21T06:42:34.970Z",
  "updatedAt": "2022-09-21T06:42:34.970Z",
  "productId": 117,
  "categoryId": 7
  }
  }
  ],
  "providers": [
  {
  "id": 2,
  "name": "Panaderia PRINCESS",
  "mail": "princess_pana@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663103598/2251afaaf01643609875773b72409974_9b83b73899.png",
  "adress": "Av. Siempre Viva 1589, Córdoba.",
  "phone": "54935189657412",
  "CUIT": "3248965712595",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T06:42:34.971Z",
  "updatedAt": "2022-09-21T06:42:34.971Z",
  "productId": 117,
  "providerId": 2
  }
  }
  ]
  },
  {
  "id": 118,
  "title": "Nestooooor",
  "price": 876,
  "description": "kjgv",
  "image": "https://img-global.cpcdn.com/recipes/8e4ada7e89827ac2/1200x630cq70/photo.jpg",
  "disable": false,
  "like": 0,
  "stock": 457,
  "sale_count": 0,
  "cost": 5,
  "margin": 457,
  "diets": [
  {
  "id": 1,
  "name": "gluten free",
  "diet_product": {
  "createdAt": "2022-09-21T06:49:08.713Z",
  "updatedAt": "2022-09-21T06:49:08.713Z",
  "productId": 118,
  "dietId": 1
  }
  }
  ],
  "categories": [
  {
  "id": 5,
  "name": "pizza",
  "product_category": {
  "createdAt": "2022-09-21T06:49:08.714Z",
  "updatedAt": "2022-09-21T06:49:08.714Z",
  "productId": 118,
  "categoryId": 5
  }
  }
  ],
  "providers": [
  {
  "id": 3,
  "name": "Frigorifico Ciram",
  "mail": "FriCiram@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663104880/2251afaaf01643609875773b72409974_3_47a737b240.png",
  "adress": "Av. Fuerza Aerea Argentina 2400",
  "phone": "935187896541",
  "CUIT": "3289654785266",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T06:49:08.712Z",
  "updatedAt": "2022-09-21T06:49:08.712Z",
  "productId": 118,
  "providerId": 3
  }
  }
  ]
  },
  {
  "id": 119,
  "title": "Nestor Arias",
  "price": 567000,
  "description": "hgcvcgh",
  "image": "https://img-global.cpcdn.com/recipes/8e4ada7e89827ac2/1200x630cq70/photo.jpg",
  "disable": false,
  "like": 0,
  "stock": 1754,
  "sale_count": 0,
  "cost": 456,
  "margin": 765,
  "diets": [
  {
  "id": 3,
  "name": "dairy free",
  "diet_product": {
  "createdAt": "2022-09-21T06:51:34.521Z",
  "updatedAt": "2022-09-21T06:51:34.521Z",
  "productId": 119,
  "dietId": 3
  }
  }
  ],
  "categories": [
  {
  "id": 12,
  "name": "ice-cream",
  "product_category": {
  "createdAt": "2022-09-21T06:51:34.522Z",
  "updatedAt": "2022-09-21T06:51:34.522Z",
  "productId": 119,
  "categoryId": 12
  }
  }
  ],
  "providers": [
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T06:51:34.520Z",
  "updatedAt": "2022-09-21T06:51:34.520Z",
  "productId": 119,
  "providerId": 9
  }
  }
  ]
  },
  {
  "id": 106,
  "title": "Ice Selva Negra",
  "price": 600,
  "description": "Helado de chocolate, cerezas y crema batida.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663116317/small_black_3c4fec04d0.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 12,
  "name": "ice-cream",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.154Z",
  "updatedAt": "2022-09-21T05:48:50.154Z",
  "productId": 106,
  "categoryId": 12
  }
  }
  ],
  "providers": [
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.203Z",
  "updatedAt": "2022-09-21T05:48:50.203Z",
  "productId": 106,
  "providerId": 7
  }
  },
  {
  "id": 8,
  "name": "Cafeteria Sunset",
  "mail": "SunsetRiders@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 789, Córdoba.",
  "phone": "954565369697",
  "CUIT": "3278965478596",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.203Z",
  "updatedAt": "2022-09-21T05:48:50.203Z",
  "productId": 106,
  "providerId": 8
  }
  }
  ]
  },
  {
  "id": 101,
  "title": "Agua saborizada Limón",
  "price": 250,
  "description": "Agua sabor Limón -Aquarius 500ml.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663113805/small_Aquarius_Limon_botella_500ml_vaso_blanco_1_040f886ec4.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 10,
  "name": "gaseosas-aguas",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.148Z",
  "updatedAt": "2022-09-21T05:48:50.148Z",
  "productId": 101,
  "categoryId": 10
  }
  }
  ],
  "providers": [
  {
  "id": 8,
  "name": "Cafeteria Sunset",
  "mail": "SunsetRiders@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 789, Córdoba.",
  "phone": "954565369697",
  "CUIT": "3278965478596",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.192Z",
  "updatedAt": "2022-09-21T05:48:50.192Z",
  "productId": 101,
  "providerId": 8
  }
  }
  ]
  },
  {
  "id": 20,
  "title": "Donut bonbon",
  "price": 300,
  "description": "Dona cubierta de chocolate blanco, decorada con chocolate negro y centro bombón.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662583452/small_donas_06_915283c563.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 2,
  "name": "donuts",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.120Z",
  "updatedAt": "2022-09-21T05:48:50.120Z",
  "productId": 20,
  "categoryId": 2
  }
  }
  ],
  "providers": [
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.163Z",
  "updatedAt": "2022-09-21T05:48:50.163Z",
  "productId": 20,
  "providerId": 9
  }
  },
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.163Z",
  "updatedAt": "2022-09-21T05:48:50.163Z",
  "productId": 20,
  "providerId": 7
  }
  }
  ]
  },
  {
  "id": 82,
  "title": "Tabla Locos por el Queso",
  "price": 3500,
  "description": "Pan de campo relleno de fondue de queso,  pollo y lomo en tiras, pinchos de verdura y papas fritas.\nConsultar por opción vegetariana.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663097156/medium_tabla_locos_por_el_queso_a0c2a36ff2.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 11,
  "name": "picadas",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.145Z",
  "updatedAt": "2022-09-21T05:48:50.145Z",
  "productId": 82,
  "categoryId": 11
  }
  }
  ],
  "providers": [
  {
  "id": 3,
  "name": "Frigorifico Ciram",
  "mail": "FriCiram@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663104880/2251afaaf01643609875773b72409974_3_47a737b240.png",
  "adress": "Av. Fuerza Aerea Argentina 2400",
  "phone": "935187896541",
  "CUIT": "3289654785266",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.185Z",
  "updatedAt": "2022-09-21T05:48:50.185Z",
  "productId": 82,
  "providerId": 3
  }
  }
  ]
  },
  {
  "id": 25,
  "title": "Three Donuts",
  "price": 550,
  "description": "3 uds. de donas con baño de frutilla, cereza y chocolate amargo.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662585995/small_donas_11_e31380919e.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 2,
  "name": "donuts",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.122Z",
  "updatedAt": "2022-09-21T05:48:50.122Z",
  "productId": 25,
  "categoryId": 2
  }
  }
  ],
  "providers": [
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.164Z",
  "updatedAt": "2022-09-21T05:48:50.164Z",
  "productId": 25,
  "providerId": 7
  }
  },
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.165Z",
  "updatedAt": "2022-09-21T05:48:50.165Z",
  "productId": 25,
  "providerId": 9
  }
  }
  ]
  },
  {
  "id": 26,
  "title": "Sticks Donut",
  "price": 300,
  "description": "Dona bañada con chocolate. Toppings y centro de oblea rellena de dulce de leche.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662587413/small_donas_14_6e513683c0.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 2,
  "name": "donuts",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.123Z",
  "updatedAt": "2022-09-21T05:48:50.123Z",
  "productId": 26,
  "categoryId": 2
  }
  }
  ],
  "providers": [
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.165Z",
  "updatedAt": "2022-09-21T05:48:50.165Z",
  "productId": 26,
  "providerId": 9
  }
  },
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.165Z",
  "updatedAt": "2022-09-21T05:48:50.165Z",
  "productId": 26,
  "providerId": 7
  }
  }
  ]
  },
  {
  "id": 27,
  "title": "Cookie Chips",
  "price": 200,
  "description": "Galletas de vainilla con chips de chocolate.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662589417/small_galletas_01_6348b9f4d3.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 3,
  "name": "cookie",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.123Z",
  "updatedAt": "2022-09-21T05:48:50.123Z",
  "productId": 27,
  "categoryId": 3
  }
  }
  ],
  "providers": [
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.165Z",
  "updatedAt": "2022-09-21T05:48:50.165Z",
  "productId": 27,
  "providerId": 7
  }
  },
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.166Z",
  "updatedAt": "2022-09-21T05:48:50.166Z",
  "productId": 27,
  "providerId": 9
  }
  },
  {
  "id": 2,
  "name": "Panaderia PRINCESS",
  "mail": "princess_pana@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663103598/2251afaaf01643609875773b72409974_9b83b73899.png",
  "adress": "Av. Siempre Viva 1589, Córdoba.",
  "phone": "54935189657412",
  "CUIT": "3248965712595",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.165Z",
  "updatedAt": "2022-09-21T05:48:50.165Z",
  "productId": 27,
  "providerId": 2
  }
  }
  ]
  },
  {
  "id": 93,
  "title": "Tabla Primavera",
  "price": 3000,
  "description": "Picada fresca. Rodajas de loganiza, jamón crudo, quesos, y deliciosas salsas de la casa para acompañar y debustar con pan de papa y semillas.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663099897/medium_picada_2_ac91868b17.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 11,
  "name": "picadas",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.147Z",
  "updatedAt": "2022-09-21T05:48:50.147Z",
  "productId": 93,
  "categoryId": 11
  }
  }
  ],
  "providers": [
  {
  "id": 3,
  "name": "Frigorifico Ciram",
  "mail": "FriCiram@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663104880/2251afaaf01643609875773b72409974_3_47a737b240.png",
  "adress": "Av. Fuerza Aerea Argentina 2400",
  "phone": "935187896541",
  "CUIT": "3289654785266",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.191Z",
  "updatedAt": "2022-09-21T05:48:50.191Z",
  "productId": 93,
  "providerId": 3
  }
  }
  ]
  },
  {
  "id": 11,
  "title": "Americano",
  "price": 300,
  "description": "Expresso caliente.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662574691/small_cafe_11_f231dc094a.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 1,
  "name": "coffees",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.114Z",
  "updatedAt": "2022-09-21T05:48:50.114Z",
  "productId": 11,
  "categoryId": 1
  }
  }
  ],
  "providers": [
  {
  "id": 8,
  "name": "Cafeteria Sunset",
  "mail": "SunsetRiders@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 789, Córdoba.",
  "phone": "954565369697",
  "CUIT": "3278965478596",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.159Z",
  "updatedAt": "2022-09-21T05:48:50.159Z",
  "productId": 11,
  "providerId": 8
  }
  },
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.159Z",
  "updatedAt": "2022-09-21T05:48:50.159Z",
  "productId": 11,
  "providerId": 9
  }
  }
  ]
  },
  {
  "id": 39,
  "title": "Black Jungle",
  "price": 400,
  "description": "Porción de torta selva negra.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662725707/small_pastel_06_fa0410c387.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 4,
  "name": "cakes",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.130Z",
  "updatedAt": "2022-09-21T05:48:50.130Z",
  "productId": 39,
  "categoryId": 4
  }
  }
  ],
  "providers": [
  {
  "id": 2,
  "name": "Panaderia PRINCESS",
  "mail": "princess_pana@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663103598/2251afaaf01643609875773b72409974_9b83b73899.png",
  "adress": "Av. Siempre Viva 1589, Córdoba.",
  "phone": "54935189657412",
  "CUIT": "3248965712595",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.170Z",
  "updatedAt": "2022-09-21T05:48:50.170Z",
  "productId": 39,
  "providerId": 2
  }
  },
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.171Z",
  "updatedAt": "2022-09-21T05:48:50.171Z",
  "productId": 39,
  "providerId": 7
  }
  },
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.171Z",
  "updatedAt": "2022-09-21T05:48:50.171Z",
  "productId": 39,
  "providerId": 9
  }
  }
  ]
  },
  {
  "id": 17,
  "title": "Glazed Strawberry",
  "price": 200,
  "description": "Dona glaseada sabor a frutilla cubierta con toppings de azúcar multicolor.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662578346/small_donas_02_9d46c778c5.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 2,
  "name": "donuts",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.121Z",
  "updatedAt": "2022-09-21T05:48:50.121Z",
  "productId": 17,
  "categoryId": 2
  }
  }
  ],
  "providers": [
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.163Z",
  "updatedAt": "2022-09-21T05:48:50.163Z",
  "productId": 17,
  "providerId": 9
  }
  },
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.163Z",
  "updatedAt": "2022-09-21T05:48:50.163Z",
  "productId": 17,
  "providerId": 7
  }
  }
  ]
  },
  {
  "id": 66,
  "title": "Sparkling iced tea",
  "price": 300,
  "description": "Con cualquiera de tus tés favoritos quedará muy bien. Nosotros te recomendamos usar té verde. Haz el té más concentrado de lo habitual. \nAntes de servirlo, diluye incorporando agua gasificada, para un burbujeante resultado. Si deseas, puedes añadir un poco de hojas de hierbabuena para aromatizar.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663081603/small_59261641_l_696x464_02aa8f7b47.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 8,
  "name": "cold-drinks",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.139Z",
  "updatedAt": "2022-09-21T05:48:50.139Z",
  "productId": 66,
  "categoryId": 8
  }
  }
  ],
  "providers": [
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.179Z",
  "updatedAt": "2022-09-21T05:48:50.179Z",
  "productId": 66,
  "providerId": 9
  }
  }
  ]
  },
  {
  "id": 33,
  "title": "Crepe Cake",
  "price": 330,
  "description": "Porción de pastel de crepas.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662724777/small_pastel_01_a678f84eef.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 4,
  "name": "cakes",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.125Z",
  "updatedAt": "2022-09-21T05:48:50.125Z",
  "productId": 33,
  "categoryId": 4
  }
  }
  ],
  "providers": [
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.167Z",
  "updatedAt": "2022-09-21T05:48:50.167Z",
  "productId": 33,
  "providerId": 7
  }
  },
  {
  "id": 2,
  "name": "Panaderia PRINCESS",
  "mail": "princess_pana@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663103598/2251afaaf01643609875773b72409974_9b83b73899.png",
  "adress": "Av. Siempre Viva 1589, Córdoba.",
  "phone": "54935189657412",
  "CUIT": "3248965712595",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.167Z",
  "updatedAt": "2022-09-21T05:48:50.167Z",
  "productId": 33,
  "providerId": 2
  }
  }
  ]
  },
  {
  "id": 57,
  "title": "Cuarto de Libra",
  "price": 800,
  "description": "Hamburguesa con pan de papa, medallón de carne, queso cheddar,  ketchup,  mostaza y cebolla. ",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662910350/small_hamburguesas_05_e660304471.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 6,
  "name": "hamburguers",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.135Z",
  "updatedAt": "2022-09-21T05:48:50.135Z",
  "productId": 57,
  "categoryId": 6
  }
  }
  ],
  "providers": [
  {
  "id": 3,
  "name": "Frigorifico Ciram",
  "mail": "FriCiram@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663104880/2251afaaf01643609875773b72409974_3_47a737b240.png",
  "adress": "Av. Fuerza Aerea Argentina 2400",
  "phone": "935187896541",
  "CUIT": "3289654785266",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.175Z",
  "updatedAt": "2022-09-21T05:48:50.175Z",
  "productId": 57,
  "providerId": 3
  }
  },
  {
  "id": 4,
  "name": "Insumos Burger",
  "mail": "theBurger_Shack@outlook.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105391/2251afaaf01643609875773b72409974_4_efcdd4b9a5.png",
  "adress": "Las Leñas 2559, Córdoba.",
  "phone": "3519748596321",
  "CUIT": "3258964789632",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.175Z",
  "updatedAt": "2022-09-21T05:48:50.175Z",
  "productId": 57,
  "providerId": 4
  }
  }
  ]
  },
  {
  "id": 109,
  "title": "Ice Cup Frutal",
  "price": 600,
  "description": "Copa con frutas, arándanos congelados, cerezas, peras leche condensada, bocha de helado a elección. Decorado con salsa de arándanos y  crema chantilly.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663117119/small_copafruta_2369acf4ac.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 12,
  "name": "ice-cream",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.155Z",
  "updatedAt": "2022-09-21T05:48:50.155Z",
  "productId": 109,
  "categoryId": 12
  }
  }
  ],
  "providers": [
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.205Z",
  "updatedAt": "2022-09-21T05:48:50.205Z",
  "productId": 109,
  "providerId": 7
  }
  },
  {
  "id": 8,
  "name": "Cafeteria Sunset",
  "mail": "SunsetRiders@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 789, Córdoba.",
  "phone": "954565369697",
  "CUIT": "3278965478596",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.205Z",
  "updatedAt": "2022-09-21T05:48:50.205Z",
  "productId": 109,
  "providerId": 8
  }
  }
  ]
  },
  {
  "id": 31,
  "title": "Traditional Donut",
  "price": 200,
  "description": "Dona sabor tradicional con baño de salsa de chocolate.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662587206/small_donas_12_b3e666885c.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 2,
  "name": "donuts",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.131Z",
  "updatedAt": "2022-09-21T05:48:50.131Z",
  "productId": 31,
  "categoryId": 2
  }
  }
  ],
  "providers": [
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.171Z",
  "updatedAt": "2022-09-21T05:48:50.171Z",
  "productId": 31,
  "providerId": 9
  }
  },
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.171Z",
  "updatedAt": "2022-09-21T05:48:50.171Z",
  "productId": 31,
  "providerId": 7
  }
  }
  ]
  },
  {
  "id": 34,
  "title": "Combo Cookie Mantequilla",
  "price": 500,
  "description": "Combo de galletas de Mantequilla Variadas",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662723268/small_galletas_05_d9d1bbbb92.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 3,
  "name": "cookie",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.127Z",
  "updatedAt": "2022-09-21T05:48:50.127Z",
  "productId": 34,
  "categoryId": 3
  }
  }
  ],
  "providers": [
  {
  "id": 2,
  "name": "Panaderia PRINCESS",
  "mail": "princess_pana@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663103598/2251afaaf01643609875773b72409974_9b83b73899.png",
  "adress": "Av. Siempre Viva 1589, Córdoba.",
  "phone": "54935189657412",
  "CUIT": "3248965712595",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.168Z",
  "updatedAt": "2022-09-21T05:48:50.168Z",
  "productId": 34,
  "providerId": 2
  }
  },
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.168Z",
  "updatedAt": "2022-09-21T05:48:50.168Z",
  "productId": 34,
  "providerId": 7
  }
  },
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.169Z",
  "updatedAt": "2022-09-21T05:48:50.169Z",
  "productId": 34,
  "providerId": 9
  }
  }
  ]
  },
  {
  "id": 12,
  "title": "Frappuccino de dulce de leche",
  "price": 300,
  "description": "Leche batida con dulce de leche. Decorado con crema batida y salsa de dulce de leche.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662575437/small_cafe_12_7da3c7f5d3.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 1,
  "name": "coffees",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.115Z",
  "updatedAt": "2022-09-21T05:48:50.115Z",
  "productId": 12,
  "categoryId": 1
  }
  }
  ],
  "providers": [
  {
  "id": 8,
  "name": "Cafeteria Sunset",
  "mail": "SunsetRiders@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 789, Córdoba.",
  "phone": "954565369697",
  "CUIT": "3278965478596",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.159Z",
  "updatedAt": "2022-09-21T05:48:50.159Z",
  "productId": 12,
  "providerId": 8
  }
  },
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.159Z",
  "updatedAt": "2022-09-21T05:48:50.159Z",
  "productId": 12,
  "providerId": 9
  }
  }
  ]
  },
  {
  "id": 10,
  "title": "Batido de dulce de leche",
  "price": 300,
  "description": "Cubitos, leche, café y dulce de leche batidos. Decorado con salsa de chocolate y cubierto con crema batida.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662574793/small_cafe_10_87fb3339fe.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 1,
  "name": "coffees",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.116Z",
  "updatedAt": "2022-09-21T05:48:50.116Z",
  "productId": 10,
  "categoryId": 1
  }
  }
  ],
  "providers": [
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.161Z",
  "updatedAt": "2022-09-21T05:48:50.161Z",
  "productId": 10,
  "providerId": 9
  }
  },
  {
  "id": 8,
  "name": "Cafeteria Sunset",
  "mail": "SunsetRiders@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 789, Córdoba.",
  "phone": "954565369697",
  "CUIT": "3278965478596",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.160Z",
  "updatedAt": "2022-09-21T05:48:50.160Z",
  "productId": 10,
  "providerId": 8
  }
  }
  ]
  },
  {
  "id": 18,
  "title": "Donut oreo",
  "price": 250,
  "description": "Dona con cubierta de chocolate blanco , chispas de chocolate y centro de oreo",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662579274/small_donas_04_24685e8de0.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 2,
  "name": "donuts",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.118Z",
  "updatedAt": "2022-09-21T05:48:50.118Z",
  "productId": 18,
  "categoryId": 2
  }
  }
  ],
  "providers": [
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.162Z",
  "updatedAt": "2022-09-21T05:48:50.162Z",
  "productId": 18,
  "providerId": 9
  }
  },
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.162Z",
  "updatedAt": "2022-09-21T05:48:50.162Z",
  "productId": 18,
  "providerId": 7
  }
  }
  ]
  },
  {
  "id": 98,
  "title": "Coca-Cola Original",
  "price": 300,
  "description": "Gaseosa Coca-Cola sabor original - 500ml.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663113455/small_Coca_Cola_Sabor_Original_botella_500ml_vaso_blanco_1_7d0b8ff9d1.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 10,
  "name": "gaseosas-aguas",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.149Z",
  "updatedAt": "2022-09-21T05:48:50.149Z",
  "productId": 98,
  "categoryId": 10
  }
  }
  ],
  "providers": [
  {
  "id": 8,
  "name": "Cafeteria Sunset",
  "mail": "SunsetRiders@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 789, Córdoba.",
  "phone": "954565369697",
  "CUIT": "3278965478596",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.195Z",
  "updatedAt": "2022-09-21T05:48:50.195Z",
  "productId": 98,
  "providerId": 8
  }
  }
  ]
  },
  {
  "id": 64,
  "title": "Coffee Box Gift",
  "price": 3790,
  "description": "Una combinación de las mejores cervezas con un snack y un untable.\n\n2 Cervezas porrón Blest\nCerveza Baum maldita Honney\nCerveza Boris\nCerveza Cusqueña\nCerveza Duff\n1 Mani KIng o palito quentos..\n\nINCLUYE BOX CONTENEDOR - INDIVIDUAL - BOLSA DE TELA.\n\n*Foto de carácter ilustrativo!!\n*Productos y sabores sujetos a stock!",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663076574/small_gift_26c6022b58.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 7,
  "name": "coffee-boxes",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.137Z",
  "updatedAt": "2022-09-21T05:48:50.137Z",
  "productId": 64,
  "categoryId": 7
  }
  }
  ],
  "providers": [
  {
  "id": 5,
  "name": "Cervezas Bear Creek",
  "mail": "cervezas_BearCreek@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105575/2251afaaf01643609875773b72409974_5_9214b25a24.png",
  "adress": "Los Nogales 589, Córdoba.",
  "phone": "9543517963258",
  "CUIT": "3278965412",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.177Z",
  "updatedAt": "2022-09-21T05:48:50.177Z",
  "productId": 64,
  "providerId": 5
  }
  }
  ]
  },
  {
  "id": 104,
  "title": "Ice Fruit",
  "price": 600,
  "description": "Helado de vainilla o chocolate a gusto. Kiwi, frutillas, banana, manzana, durazno. Crema chantilly.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663116078/small_heladofrutas_a6b042fb80.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 12,
  "name": "ice-cream",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.151Z",
  "updatedAt": "2022-09-21T05:48:50.151Z",
  "productId": 104,
  "categoryId": 12
  }
  }
  ],
  "providers": [
  {
  "id": 8,
  "name": "Cafeteria Sunset",
  "mail": "SunsetRiders@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 789, Córdoba.",
  "phone": "954565369697",
  "CUIT": "3278965478596",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.197Z",
  "updatedAt": "2022-09-21T05:48:50.197Z",
  "productId": 104,
  "providerId": 8
  }
  },
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.197Z",
  "updatedAt": "2022-09-21T05:48:50.197Z",
  "productId": 104,
  "providerId": 7
  }
  }
  ]
  },
  {
  "id": 71,
  "title": "Azahar y naranja",
  "price": 300,
  "description": "Agrega un chorrito de agua de azahar y algunos trozos de naranja pelados y sin piel.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663081999/small_15165972_l_696x483_f1af82a69b.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 8,
  "name": "cold-drinks",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.142Z",
  "updatedAt": "2022-09-21T05:48:50.142Z",
  "productId": 71,
  "categoryId": 8
  }
  }
  ],
  "providers": [
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.181Z",
  "updatedAt": "2022-09-21T05:48:50.181Z",
  "productId": 71,
  "providerId": 9
  }
  }
  ]
  },
  {
  "id": 2,
  "title": "Frappuccino",
  "price": 300,
  "description": "Café con hielo cubierto de espuma elaborado a partir de café instantáneo.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662575365/small_cafe_02_5ac442febe.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 1,
  "name": "coffees",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.111Z",
  "updatedAt": "2022-09-21T05:48:50.111Z",
  "productId": 2,
  "categoryId": 1
  }
  }
  ],
  "providers": [
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.156Z",
  "updatedAt": "2022-09-21T05:48:50.156Z",
  "productId": 2,
  "providerId": 9
  }
  },
  {
  "id": 8,
  "name": "Cafeteria Sunset",
  "mail": "SunsetRiders@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 789, Córdoba.",
  "phone": "954565369697",
  "CUIT": "3278965478596",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.156Z",
  "updatedAt": "2022-09-21T05:48:50.156Z",
  "productId": 2,
  "providerId": 8
  }
  },
  {
  "id": 2,
  "name": "Panaderia PRINCESS",
  "mail": "princess_pana@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663103598/2251afaaf01643609875773b72409974_9b83b73899.png",
  "adress": "Av. Siempre Viva 1589, Córdoba.",
  "phone": "54935189657412",
  "CUIT": "3248965712595",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.157Z",
  "updatedAt": "2022-09-21T05:48:50.157Z",
  "productId": 2,
  "providerId": 2
  }
  }
  ]
  },
  {
  "id": 72,
  "title": "Té negro y menta",
  "price": 300,
  "description": "Esta variación no te decepcionará. Agregar un poco de infusión de menta al té le dará el sabor. Si quieres ir más allá, incluye además algunas hojas frescas al servirlo.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663082104/small_41822468_l_696x464_90242d684b.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 8,
  "name": "cold-drinks",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.139Z",
  "updatedAt": "2022-09-21T05:48:50.139Z",
  "productId": 72,
  "categoryId": 8
  }
  }
  ],
  "providers": [
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.180Z",
  "updatedAt": "2022-09-21T05:48:50.180Z",
  "productId": 72,
  "providerId": 9
  }
  }
  ]
  },
  {
  "id": 46,
  "title": "Sausage",
  "price": 1500,
  "description": "Pizza con doble queso muzzarella y trozos de salchicha alemana.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662727517/small_pizzas_05_c9f1f84f64.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 5,
  "name": "pizza",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.132Z",
  "updatedAt": "2022-09-21T05:48:50.132Z",
  "productId": 46,
  "categoryId": 5
  }
  }
  ],
  "providers": [
  {
  "id": 2,
  "name": "Panaderia PRINCESS",
  "mail": "princess_pana@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663103598/2251afaaf01643609875773b72409974_9b83b73899.png",
  "adress": "Av. Siempre Viva 1589, Córdoba.",
  "phone": "54935189657412",
  "CUIT": "3248965712595",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.172Z",
  "updatedAt": "2022-09-21T05:48:50.172Z",
  "productId": 46,
  "providerId": 2
  }
  }
  ]
  },
  {
  "id": 83,
  "title": "Fondue",
  "price": 3000,
  "description": "Nuestra exquisita fondue de queso en pan de campo. Pollo en tiras y pinchos de verduras salteadas.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663097003/medium_Fondue_ea06e0b3c7.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 11,
  "name": "picadas",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.143Z",
  "updatedAt": "2022-09-21T05:48:50.143Z",
  "productId": 83,
  "categoryId": 11
  }
  }
  ],
  "providers": [
  {
  "id": 3,
  "name": "Frigorifico Ciram",
  "mail": "FriCiram@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663104880/2251afaaf01643609875773b72409974_3_47a737b240.png",
  "adress": "Av. Fuerza Aerea Argentina 2400",
  "phone": "935187896541",
  "CUIT": "3289654785266",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.182Z",
  "updatedAt": "2022-09-21T05:48:50.182Z",
  "productId": 83,
  "providerId": 3
  }
  }
  ]
  },
  {
  "id": 77,
  "title": "Caravana",
  "price": 1000,
  "description": "DORADA / LIVIANA / LUPULADA / AMIGABLE\n\nUna cerveza con alcohol bajo y muchísimo aroma y sabor a lúpulo, inspirada en las Session IPA americana, para refrescarnos.\n\nAlcohol: 4,2%          IBU: 30         Amargor: MEDIO",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663093389/small_chop_f30604e428.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 9,
  "name": "craft-beers",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.140Z",
  "updatedAt": "2022-09-21T05:48:50.140Z",
  "productId": 77,
  "categoryId": 9
  }
  }
  ],
  "providers": [
  {
  "id": 5,
  "name": "Cervezas Bear Creek",
  "mail": "cervezas_BearCreek@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105575/2251afaaf01643609875773b72409974_5_9214b25a24.png",
  "adress": "Los Nogales 589, Córdoba.",
  "phone": "9543517963258",
  "CUIT": "3278965412",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.180Z",
  "updatedAt": "2022-09-21T05:48:50.180Z",
  "productId": 77,
  "providerId": 5
  }
  }
  ]
  },
  {
  "id": 73,
  "title": "Strawberry Tea",
  "price": 350,
  "description": "Té frio de frutilla con trozos y pulpa. Acompañado de rodajas de lima.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663100164/medium_f768x1_5786_5913_5050_8ea2c0774d.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 8,
  "name": "cold-drinks",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.141Z",
  "updatedAt": "2022-09-21T05:48:50.141Z",
  "productId": 73,
  "categoryId": 8
  }
  }
  ],
  "providers": [
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.180Z",
  "updatedAt": "2022-09-21T05:48:50.180Z",
  "productId": 73,
  "providerId": 9
  }
  }
  ]
  },
  {
  "id": 56,
  "title": "Hot Dog Especial",
  "price": 450,
  "description": "Pan, salchicha, mostaza, ketchup, salteado pollo y morrones. ",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662910456/small_hamburguesas_07_d4b6ed4086.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 6,
  "name": "hamburguers",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.135Z",
  "updatedAt": "2022-09-21T05:48:50.135Z",
  "productId": 56,
  "categoryId": 6
  }
  }
  ],
  "providers": [
  {
  "id": 4,
  "name": "Insumos Burger",
  "mail": "theBurger_Shack@outlook.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105391/2251afaaf01643609875773b72409974_4_efcdd4b9a5.png",
  "adress": "Las Leñas 2559, Córdoba.",
  "phone": "3519748596321",
  "CUIT": "3258964789632",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.175Z",
  "updatedAt": "2022-09-21T05:48:50.175Z",
  "productId": 56,
  "providerId": 4
  }
  },
  {
  "id": 3,
  "name": "Frigorifico Ciram",
  "mail": "FriCiram@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663104880/2251afaaf01643609875773b72409974_3_47a737b240.png",
  "adress": "Av. Fuerza Aerea Argentina 2400",
  "phone": "935187896541",
  "CUIT": "3289654785266",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.175Z",
  "updatedAt": "2022-09-21T05:48:50.175Z",
  "productId": 56,
  "providerId": 3
  }
  }
  ]
  },
  {
  "id": 13,
  "title": "Frutilla Creme Frappuccino",
  "price": 300,
  "description": "Frappuccino a base de crema. Deliciosa mezcla de crema de frutillas batida con hielo, decorada con crema batida y salsa de frutilla.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662575496/small_cafe_13_715558fd91.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 1,
  "name": "coffees",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.116Z",
  "updatedAt": "2022-09-21T05:48:50.116Z",
  "productId": 13,
  "categoryId": 1
  }
  }
  ],
  "providers": [
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.161Z",
  "updatedAt": "2022-09-21T05:48:50.161Z",
  "productId": 13,
  "providerId": 9
  }
  },
  {
  "id": 8,
  "name": "Cafeteria Sunset",
  "mail": "SunsetRiders@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 789, Córdoba.",
  "phone": "954565369697",
  "CUIT": "3278965478596",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.161Z",
  "updatedAt": "2022-09-21T05:48:50.161Z",
  "productId": 13,
  "providerId": 8
  }
  }
  ]
  },
  {
  "id": 21,
  "title": "Donut Rocklets",
  "price": 250,
  "description": "Dona con baño de chocolate y con toppings de rocklets.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584051/small_donas_07_775e1dee12.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 2,
  "name": "donuts",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.122Z",
  "updatedAt": "2022-09-21T05:48:50.122Z",
  "productId": 21,
  "categoryId": 2
  }
  }
  ],
  "providers": [
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.164Z",
  "updatedAt": "2022-09-21T05:48:50.164Z",
  "productId": 21,
  "providerId": 7
  }
  },
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.164Z",
  "updatedAt": "2022-09-21T05:48:50.164Z",
  "productId": 21,
  "providerId": 9
  }
  }
  ]
  },
  {
  "id": 5,
  "title": "Latte Macchiato",
  "price": 300,
  "description": "Un tercio de café y el restante leche. Primero se echa la leche con espuma y luego se mancha de café.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662575548/small_cafe_05_037d33552a.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 1,
  "name": "coffees",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.113Z",
  "updatedAt": "2022-09-21T05:48:50.113Z",
  "productId": 5,
  "categoryId": 1
  }
  }
  ],
  "providers": [
  {
  "id": 2,
  "name": "Panaderia PRINCESS",
  "mail": "princess_pana@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663103598/2251afaaf01643609875773b72409974_9b83b73899.png",
  "adress": "Av. Siempre Viva 1589, Córdoba.",
  "phone": "54935189657412",
  "CUIT": "3248965712595",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.157Z",
  "updatedAt": "2022-09-21T05:48:50.157Z",
  "productId": 5,
  "providerId": 2
  }
  },
  {
  "id": 8,
  "name": "Cafeteria Sunset",
  "mail": "SunsetRiders@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 789, Córdoba.",
  "phone": "954565369697",
  "CUIT": "3278965478596",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.158Z",
  "updatedAt": "2022-09-21T05:48:50.158Z",
  "productId": 5,
  "providerId": 8
  }
  },
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.158Z",
  "updatedAt": "2022-09-21T05:48:50.158Z",
  "productId": 5,
  "providerId": 9
  }
  }
  ]
  },
  {
  "id": 107,
  "title": "Ice Capelina Frutilla",
  "price": 500,
  "description": "Bochas de helado de frutilla y frutillas frescas sobre capelina ondeada, decorada de cubanito rellenos de frutilla.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663116539/small_frutilla_17cabffdc4.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 12,
  "name": "ice-cream",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.151Z",
  "updatedAt": "2022-09-21T05:48:50.151Z",
  "productId": 107,
  "categoryId": 12
  }
  }
  ],
  "providers": [
  {
  "id": 8,
  "name": "Cafeteria Sunset",
  "mail": "SunsetRiders@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 789, Córdoba.",
  "phone": "954565369697",
  "CUIT": "3278965478596",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.199Z",
  "updatedAt": "2022-09-21T05:48:50.199Z",
  "productId": 107,
  "providerId": 8
  }
  },
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.198Z",
  "updatedAt": "2022-09-21T05:48:50.198Z",
  "productId": 107,
  "providerId": 7
  }
  }
  ]
  },
  {
  "id": 19,
  "title": "Cherry donut",
  "price": 250,
  "description": "Dona con cubierta de chocolate blanco y cereal sabor cereza.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662579625/small_donas_05_e0b7b81d76.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 2,
  "name": "donuts",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.119Z",
  "updatedAt": "2022-09-21T05:48:50.119Z",
  "productId": 19,
  "categoryId": 2
  }
  }
  ],
  "providers": [
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.163Z",
  "updatedAt": "2022-09-21T05:48:50.163Z",
  "productId": 19,
  "providerId": 9
  }
  },
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.163Z",
  "updatedAt": "2022-09-21T05:48:50.163Z",
  "productId": 19,
  "providerId": 7
  }
  }
  ]
  },
  {
  "id": 108,
  "title": "Ice Cream Kids",
  "price": 400,
  "description": "Bocha de helado a elección, cucurucho de oblea, Rocklets. Ideal para los mas chiquitos.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663116930/small_heladokind_b8e3f94ede.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 12,
  "name": "ice-cream",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.152Z",
  "updatedAt": "2022-09-21T05:48:50.152Z",
  "productId": 108,
  "categoryId": 12
  }
  }
  ],
  "providers": [
  {
  "id": 8,
  "name": "Cafeteria Sunset",
  "mail": "SunsetRiders@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 789, Córdoba.",
  "phone": "954565369697",
  "CUIT": "3278965478596",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.203Z",
  "updatedAt": "2022-09-21T05:48:50.203Z",
  "productId": 108,
  "providerId": 8
  }
  },
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.200Z",
  "updatedAt": "2022-09-21T05:48:50.200Z",
  "productId": 108,
  "providerId": 7
  }
  }
  ]
  },
  {
  "id": 52,
  "title": "Crispy chicken",
  "price": 700,
  "description": "Hamburguesa con pan de papa, medallón de pollo crujiente, queso cheddar, lechuga, tomate y  mayonesa casera.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662910128/small_hamburguesas_02_8ddfc1dbe7.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 6,
  "name": "hamburguers",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.133Z",
  "updatedAt": "2022-09-21T05:48:50.133Z",
  "productId": 52,
  "categoryId": 6
  }
  }
  ],
  "providers": [
  {
  "id": 4,
  "name": "Insumos Burger",
  "mail": "theBurger_Shack@outlook.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105391/2251afaaf01643609875773b72409974_4_efcdd4b9a5.png",
  "adress": "Las Leñas 2559, Córdoba.",
  "phone": "3519748596321",
  "CUIT": "3258964789632",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.174Z",
  "updatedAt": "2022-09-21T05:48:50.174Z",
  "productId": 52,
  "providerId": 4
  }
  },
  {
  "id": 3,
  "name": "Frigorifico Ciram",
  "mail": "FriCiram@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663104880/2251afaaf01643609875773b72409974_3_47a737b240.png",
  "adress": "Av. Fuerza Aerea Argentina 2400",
  "phone": "935187896541",
  "CUIT": "3289654785266",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.173Z",
  "updatedAt": "2022-09-21T05:48:50.173Z",
  "productId": 52,
  "providerId": 3
  }
  }
  ]
  },
  {
  "id": 37,
  "title": "Croissanterie",
  "price": 400,
  "description": "2 uds. de croissants rellenas de chocolate.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662725264/small_pastel_03_f262274c26.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 4,
  "name": "cakes",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.127Z",
  "updatedAt": "2022-09-21T05:48:50.127Z",
  "productId": 37,
  "categoryId": 4
  }
  }
  ],
  "providers": [
  {
  "id": 2,
  "name": "Panaderia PRINCESS",
  "mail": "princess_pana@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663103598/2251afaaf01643609875773b72409974_9b83b73899.png",
  "adress": "Av. Siempre Viva 1589, Córdoba.",
  "phone": "54935189657412",
  "CUIT": "3248965712595",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.170Z",
  "updatedAt": "2022-09-21T05:48:50.170Z",
  "productId": 37,
  "providerId": 2
  }
  },
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.169Z",
  "updatedAt": "2022-09-21T05:48:50.169Z",
  "productId": 37,
  "providerId": 9
  }
  },
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.169Z",
  "updatedAt": "2022-09-21T05:48:50.169Z",
  "productId": 37,
  "providerId": 7
  }
  }
  ]
  },
  {
  "id": 85,
  "title": "Tabla de Picanha",
  "price": 3000,
  "description": "Jugosa picanha entera con salsa criolla, pimientos con huevo y queso; acompañado de papas fritas.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663097467/medium_Tabla_Picanha_88ff7decfa.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 11,
  "name": "picadas",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.145Z",
  "updatedAt": "2022-09-21T05:48:50.145Z",
  "productId": 85,
  "categoryId": 11
  }
  }
  ],
  "providers": [
  {
  "id": 3,
  "name": "Frigorifico Ciram",
  "mail": "FriCiram@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663104880/2251afaaf01643609875773b72409974_3_47a737b240.png",
  "adress": "Av. Fuerza Aerea Argentina 2400",
  "phone": "935187896541",
  "CUIT": "3289654785266",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.186Z",
  "updatedAt": "2022-09-21T05:48:50.186Z",
  "productId": 85,
  "providerId": 3
  }
  }
  ]
  },
  {
  "id": 32,
  "title": "Meringue Macaroons",
  "price": 1000,
  "description": "Combo para compartir. 6 Macarrones de merengue rellenos de dulce de leche.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662723582/small_galletas_06_2dbf276e5f.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 3,
  "name": "cookie",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.126Z",
  "updatedAt": "2022-09-21T05:48:50.126Z",
  "productId": 32,
  "categoryId": 3
  }
  }
  ],
  "providers": [
  {
  "id": 2,
  "name": "Panaderia PRINCESS",
  "mail": "princess_pana@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663103598/2251afaaf01643609875773b72409974_9b83b73899.png",
  "adress": "Av. Siempre Viva 1589, Córdoba.",
  "phone": "54935189657412",
  "CUIT": "3248965712595",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.168Z",
  "updatedAt": "2022-09-21T05:48:50.168Z",
  "productId": 32,
  "providerId": 2
  }
  },
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.168Z",
  "updatedAt": "2022-09-21T05:48:50.168Z",
  "productId": 32,
  "providerId": 7
  }
  },
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.168Z",
  "updatedAt": "2022-09-21T05:48:50.168Z",
  "productId": 32,
  "providerId": 9
  }
  }
  ]
  },
  {
  "id": 78,
  "title": "Porter",
  "price": 1000,
  "description": "MARRÓN OSCURA / MALTA TOSTADA / CHOCOLATE / CAFÉ\n\nMaltas oscuras. Sabor y aroma penetrante y nocturno. Chocolate, azúcar negro y café. La Porter es la cerveza tributo a la cultura de los primeros pubs en el puerto de Londres. Cheers.\n\nAlcohol: 5,5%          IBU: 27                Amargor: MODERADO",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663093457/small_cerveza_roja_7b8fe093b2.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 9,
  "name": "craft-beers",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.142Z",
  "updatedAt": "2022-09-21T05:48:50.142Z",
  "productId": 78,
  "categoryId": 9
  }
  }
  ],
  "providers": [
  {
  "id": 5,
  "name": "Cervezas Bear Creek",
  "mail": "cervezas_BearCreek@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105575/2251afaaf01643609875773b72409974_5_9214b25a24.png",
  "adress": "Los Nogales 589, Córdoba.",
  "phone": "9543517963258",
  "CUIT": "3278965412",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.182Z",
  "updatedAt": "2022-09-21T05:48:50.182Z",
  "productId": 78,
  "providerId": 5
  }
  }
  ]
  },
  {
  "id": 24,
  "title": "Pack Donuts compartir",
  "price": 1000,
  "description": "Combo 7 donas bañadas con frutilla, chocolate negro, chocolate blanco y  toppings de crocante y azucar de color.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662585530/small_donas_10_bb4f8f55af.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 2,
  "name": "donuts",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.123Z",
  "updatedAt": "2022-09-21T05:48:50.123Z",
  "productId": 24,
  "categoryId": 2
  }
  }
  ],
  "providers": [
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.166Z",
  "updatedAt": "2022-09-21T05:48:50.166Z",
  "productId": 24,
  "providerId": 7
  }
  },
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.166Z",
  "updatedAt": "2022-09-21T05:48:50.166Z",
  "productId": 24,
  "providerId": 9
  }
  }
  ]
  },
  {
  "id": 55,
  "title": "Doble Cuarto de Libra",
  "price": 800,
  "description": "Hamburguesa con pan de papa, doble carne, doble queso cheddar,  ketchup,  mostaza y cebolla. ",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662910415/small_hamburguesas_06_86104a4d79.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 6,
  "name": "hamburguers",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.134Z",
  "updatedAt": "2022-09-21T05:48:50.134Z",
  "productId": 55,
  "categoryId": 6
  }
  }
  ],
  "providers": [
  {
  "id": 3,
  "name": "Frigorifico Ciram",
  "mail": "FriCiram@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663104880/2251afaaf01643609875773b72409974_3_47a737b240.png",
  "adress": "Av. Fuerza Aerea Argentina 2400",
  "phone": "935187896541",
  "CUIT": "3289654785266",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.174Z",
  "updatedAt": "2022-09-21T05:48:50.174Z",
  "productId": 55,
  "providerId": 3
  }
  },
  {
  "id": 4,
  "name": "Insumos Burger",
  "mail": "theBurger_Shack@outlook.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105391/2251afaaf01643609875773b72409974_4_efcdd4b9a5.png",
  "adress": "Las Leñas 2559, Córdoba.",
  "phone": "3519748596321",
  "CUIT": "3258964789632",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.174Z",
  "updatedAt": "2022-09-21T05:48:50.174Z",
  "productId": 55,
  "providerId": 4
  }
  }
  ]
  },
  {
  "id": 68,
  "title": "Té negro y Cranberry",
  "price": 300,
  "description": "Utiliza una parte de té negro, una de jugo de arándanos y un poco de azúcar. Obtendrás una mezcla de sabor intenso y diferente. Frío o caliente es igualmente gustoso.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663081782/small_26159984_l_696x462_70ee6337e7.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 8,
  "name": "cold-drinks",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.138Z",
  "updatedAt": "2022-09-21T05:48:50.138Z",
  "productId": 68,
  "categoryId": 8
  }
  }
  ],
  "providers": [
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.177Z",
  "updatedAt": "2022-09-21T05:48:50.177Z",
  "productId": 68,
  "providerId": 9
  }
  }
  ]
  },
  {
  "id": 38,
  "title": "Pudding",
  "price": 400,
  "description": "Porción de budín de chocolate y avellanas.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662725593/small_pastel_05_0cf1c1576c.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 4,
  "name": "cakes",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.129Z",
  "updatedAt": "2022-09-21T05:48:50.129Z",
  "productId": 38,
  "categoryId": 4
  }
  }
  ],
  "providers": [
  {
  "id": 2,
  "name": "Panaderia PRINCESS",
  "mail": "princess_pana@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663103598/2251afaaf01643609875773b72409974_9b83b73899.png",
  "adress": "Av. Siempre Viva 1589, Córdoba.",
  "phone": "54935189657412",
  "CUIT": "3248965712595",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.170Z",
  "updatedAt": "2022-09-21T05:48:50.170Z",
  "productId": 38,
  "providerId": 2
  }
  },
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.170Z",
  "updatedAt": "2022-09-21T05:48:50.170Z",
  "productId": 38,
  "providerId": 7
  }
  },
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.170Z",
  "updatedAt": "2022-09-21T05:48:50.170Z",
  "productId": 38,
  "providerId": 9
  }
  }
  ]
  },
  {
  "id": 80,
  "title": "Juicy Ipa",
  "price": 1000,
  "description": "LUPULADA / TURBIA / SEDOSA\n\nUna American IPA con sabores y aromas frutales intensos, cuerpo suave y sensación en boca con textura delicada, turbia. Se percibe menos amargor que en las IPAs tradicionales, pero el lúpulo siempre es dominante.\n\nAlcohol: 5%          IBU: 22           Amargor: MEDIO",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663093605/medium_ipa_bd4a4c1155.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 9,
  "name": "craft-beers",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.144Z",
  "updatedAt": "2022-09-21T05:48:50.144Z",
  "productId": 80,
  "categoryId": 9
  }
  }
  ],
  "providers": [
  {
  "id": 5,
  "name": "Cervezas Bear Creek",
  "mail": "cervezas_BearCreek@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105575/2251afaaf01643609875773b72409974_5_9214b25a24.png",
  "adress": "Los Nogales 589, Córdoba.",
  "phone": "9543517963258",
  "CUIT": "3278965412",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.183Z",
  "updatedAt": "2022-09-21T05:48:50.183Z",
  "productId": 80,
  "providerId": 5
  }
  }
  ]
  },
  {
  "id": 110,
  "title": "Cup Cherry",
  "price": 600,
  "description": "Copa de cerezas calientes con helado. La gracia de esta combinación está en las distintas temperaturas. ",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663117488/cerezas_30436d02a5.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 12,
  "name": "ice-cream",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.154Z",
  "updatedAt": "2022-09-21T05:48:50.154Z",
  "productId": 110,
  "categoryId": 12
  }
  }
  ],
  "providers": [
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.204Z",
  "updatedAt": "2022-09-21T05:48:50.204Z",
  "productId": 110,
  "providerId": 7
  }
  },
  {
  "id": 8,
  "name": "Cafeteria Sunset",
  "mail": "SunsetRiders@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 789, Córdoba.",
  "phone": "954565369697",
  "CUIT": "3278965478596",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.204Z",
  "updatedAt": "2022-09-21T05:48:50.204Z",
  "productId": 110,
  "providerId": 8
  }
  }
  ]
  },
  {
  "id": 48,
  "title": "Longaniza",
  "price": 1500,
  "description": "Pizza con queso mozzarella, salsa de tomate preparada con combinación de especias, longaniza y tocino.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662727995/small_pizzas_09_5357910cf6.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 5,
  "name": "pizza",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.134Z",
  "updatedAt": "2022-09-21T05:48:50.134Z",
  "productId": 48,
  "categoryId": 5
  }
  }
  ],
  "providers": [
  {
  "id": 2,
  "name": "Panaderia PRINCESS",
  "mail": "princess_pana@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663103598/2251afaaf01643609875773b72409974_9b83b73899.png",
  "adress": "Av. Siempre Viva 1589, Córdoba.",
  "phone": "54935189657412",
  "CUIT": "3248965712595",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.174Z",
  "updatedAt": "2022-09-21T05:48:50.174Z",
  "productId": 48,
  "providerId": 2
  }
  }
  ]
  },
  {
  "id": 94,
  "title": "Sprite Original",
  "price": 300,
  "description": "Gaseosa Sprite - 500ml",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663113259/small_Sprite_botella_500ml_vaso_blanco_1_5f27b76cf3.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 10,
  "name": "gaseosas-aguas",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.149Z",
  "updatedAt": "2022-09-21T05:48:50.149Z",
  "productId": 94,
  "categoryId": 10
  }
  }
  ],
  "providers": [
  {
  "id": 8,
  "name": "Cafeteria Sunset",
  "mail": "SunsetRiders@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 789, Córdoba.",
  "phone": "954565369697",
  "CUIT": "3278965478596",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.193Z",
  "updatedAt": "2022-09-21T05:48:50.193Z",
  "productId": 94,
  "providerId": 8
  }
  }
  ]
  },
  {
  "id": 30,
  "title": "Cookie Honey",
  "price": 250,
  "description": "Paquete de 4 galletas de miel.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662723020/small_galletas_04_079f826629.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 3,
  "name": "cookie",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.125Z",
  "updatedAt": "2022-09-21T05:48:50.125Z",
  "productId": 30,
  "categoryId": 3
  }
  }
  ],
  "providers": [
  {
  "id": 2,
  "name": "Panaderia PRINCESS",
  "mail": "princess_pana@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663103598/2251afaaf01643609875773b72409974_9b83b73899.png",
  "adress": "Av. Siempre Viva 1589, Córdoba.",
  "phone": "54935189657412",
  "CUIT": "3248965712595",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.167Z",
  "updatedAt": "2022-09-21T05:48:50.167Z",
  "productId": 30,
  "providerId": 2
  }
  },
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.167Z",
  "updatedAt": "2022-09-21T05:48:50.167Z",
  "productId": 30,
  "providerId": 7
  }
  },
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.167Z",
  "updatedAt": "2022-09-21T05:48:50.167Z",
  "productId": 30,
  "providerId": 9
  }
  }
  ]
  },
  {
  "id": 95,
  "title": "Fanta Limón",
  "price": 300,
  "description": "Gaseosa Fanta sabor limón- 500ml",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663113332/small_Fanta_Limon_botella_500ml_vaso_blanco_1_486d96334a.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 10,
  "name": "gaseosas-aguas",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.148Z",
  "updatedAt": "2022-09-21T05:48:50.148Z",
  "productId": 95,
  "categoryId": 10
  }
  }
  ],
  "providers": [
  {
  "id": 8,
  "name": "Cafeteria Sunset",
  "mail": "SunsetRiders@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 789, Córdoba.",
  "phone": "954565369697",
  "CUIT": "3278965478596",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.193Z",
  "updatedAt": "2022-09-21T05:48:50.193Z",
  "productId": 95,
  "providerId": 8
  }
  }
  ]
  },
  {
  "id": 62,
  "title": "Coffee Box Degustación",
  "price": 4895,
  "description": "4 estilos de cervezas artesanales Cachalote\n1 Picada de quesos y fiambres envasada al vacío (250 gramos)\nMani\nFrasco de frutos secos\n1 dip Valleverde\n1 Escabeche\n\nINCLUYE BOX CONTENEDOR - INDIVIDUAL - BOLSA DE TELA.\n\n*Foto de carácter ilustrativo!!\n*Productos y sabores sujetos a stock!",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663076474/small_cachalote_8dafa5716c.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 7,
  "name": "coffee-boxes",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.136Z",
  "updatedAt": "2022-09-21T05:48:50.136Z",
  "productId": 62,
  "categoryId": 7
  }
  }
  ],
  "providers": [
  {
  "id": 5,
  "name": "Cervezas Bear Creek",
  "mail": "cervezas_BearCreek@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105575/2251afaaf01643609875773b72409974_5_9214b25a24.png",
  "adress": "Los Nogales 589, Córdoba.",
  "phone": "9543517963258",
  "CUIT": "3278965412",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.175Z",
  "updatedAt": "2022-09-21T05:48:50.175Z",
  "productId": 62,
  "providerId": 5
  }
  }
  ]
  },
  {
  "id": 97,
  "title": "Fanta Naranja",
  "price": 300,
  "description": "Gaseosa Fanta sabor naranja - 500ml.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663113392/small_Fanta_Naranja_botella_500ml_vaso_blanco_1_5a5f0f0929.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 10,
  "name": "gaseosas-aguas",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.151Z",
  "updatedAt": "2022-09-21T05:48:50.151Z",
  "productId": 97,
  "categoryId": 10
  }
  }
  ],
  "providers": [
  {
  "id": 8,
  "name": "Cafeteria Sunset",
  "mail": "SunsetRiders@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 789, Córdoba.",
  "phone": "954565369697",
  "CUIT": "3278965478596",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.194Z",
  "updatedAt": "2022-09-21T05:48:50.194Z",
  "productId": 97,
  "providerId": 8
  }
  }
  ]
  },
  {
  "id": 67,
  "title": "Caramel chai latte frappe",
  "price": 350,
  "description": "Tan delicioso como suena, haz un té chai y licúa con leche en polvo, hielo y sirope de caramelo. Lo más golosos pueden coronar con un poco de crema chantilly.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663081697/small_50584599_l_1_696x464_2368afb958.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 8,
  "name": "cold-drinks",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.138Z",
  "updatedAt": "2022-09-21T05:48:50.138Z",
  "productId": 67,
  "categoryId": 8
  }
  }
  ],
  "providers": [
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.179Z",
  "updatedAt": "2022-09-21T05:48:50.179Z",
  "productId": 67,
  "providerId": 9
  }
  }
  ]
  },
  {
  "id": 50,
  "title": "Simple",
  "price": 800,
  "description": "Hamburguesa con pan de papa, medallón de carne, queso cheddar, lechuga, tomate y  mayonesa casera.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662910045/small_hamburguesas_01_5d266c34fb.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 6,
  "name": "hamburguers",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.133Z",
  "updatedAt": "2022-09-21T05:48:50.133Z",
  "productId": 50,
  "categoryId": 6
  }
  }
  ],
  "providers": [
  {
  "id": 4,
  "name": "Insumos Burger",
  "mail": "theBurger_Shack@outlook.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105391/2251afaaf01643609875773b72409974_4_efcdd4b9a5.png",
  "adress": "Las Leñas 2559, Córdoba.",
  "phone": "3519748596321",
  "CUIT": "3258964789632",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.173Z",
  "updatedAt": "2022-09-21T05:48:50.173Z",
  "productId": 50,
  "providerId": 4
  }
  },
  {
  "id": 3,
  "name": "Frigorifico Ciram",
  "mail": "FriCiram@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663104880/2251afaaf01643609875773b72409974_3_47a737b240.png",
  "adress": "Av. Fuerza Aerea Argentina 2400",
  "phone": "935187896541",
  "CUIT": "3289654785266",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.173Z",
  "updatedAt": "2022-09-21T05:48:50.173Z",
  "productId": 50,
  "providerId": 3
  }
  }
  ]
  },
  {
  "id": 51,
  "title": "Mushrooms",
  "price": 1500,
  "description": "Pizza con queso, jamón y champiñones",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662728235/small_pizzas_11_c358e56115.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 5,
  "name": "pizza",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.132Z",
  "updatedAt": "2022-09-21T05:48:50.132Z",
  "productId": 51,
  "categoryId": 5
  }
  }
  ],
  "providers": [
  {
  "id": 2,
  "name": "Panaderia PRINCESS",
  "mail": "princess_pana@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663103598/2251afaaf01643609875773b72409974_9b83b73899.png",
  "adress": "Av. Siempre Viva 1589, Córdoba.",
  "phone": "54935189657412",
  "CUIT": "3248965712595",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.173Z",
  "updatedAt": "2022-09-21T05:48:50.173Z",
  "productId": 51,
  "providerId": 2
  }
  }
  ]
  },
  {
  "id": 76,
  "title": "Big Wave",
  "price": 1000,
  "description": "DORADA / TURBIA / CÍTRICA / CON TRIGO\n\nUn estilo propio a base de trigo con un poco de avena, cáscara de naranja, coriandro y jengibre que la hacen más cítrica, compleja y refrescante. \nComo es tradicional, NO LA FILTRAMOS, por lo que se ve turbia.\n\nAlcohol: 8,5%          IBU: 49                Amargor: MEDIO",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663093322/small_cerveza_d9d5f1c33b.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 9,
  "name": "craft-beers",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.140Z",
  "updatedAt": "2022-09-21T05:48:50.140Z",
  "productId": 76,
  "categoryId": 9
  }
  }
  ],
  "providers": [
  {
  "id": 5,
  "name": "Cervezas Bear Creek",
  "mail": "cervezas_BearCreek@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105575/2251afaaf01643609875773b72409974_5_9214b25a24.png",
  "adress": "Los Nogales 589, Córdoba.",
  "phone": "9543517963258",
  "CUIT": "3278965412",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.179Z",
  "updatedAt": "2022-09-21T05:48:50.179Z",
  "productId": 76,
  "providerId": 5
  }
  }
  ]
  },
  {
  "id": 69,
  "title": "Frutos rojos y piña",
  "price": 300,
  "description": "Mezcla el té helado a partes iguales con jugo de frutos rojos y jugo de piña muy bien colados (sin sedimentos); endulza y combina con bastante hielo.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663081938/small_58414478_l_1_696x464_46d5c5b75d.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 8,
  "name": "cold-drinks",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.139Z",
  "updatedAt": "2022-09-21T05:48:50.139Z",
  "productId": 69,
  "categoryId": 8
  }
  }
  ],
  "providers": [
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.179Z",
  "updatedAt": "2022-09-21T05:48:50.179Z",
  "productId": 69,
  "providerId": 9
  }
  }
  ]
  },
  {
  "id": 81,
  "title": "Late Afternoon",
  "price": 1000,
  "description": "ÁMBAR / FRUTADA / TURBIA / POMELO / LEVE ACIDEZ\n\nInspirada en las Weizen de trigo turbias del sur de Alemania, tiene un carácter cítrico-frutado y una leve acidez por el uso de pomelo rosado.\n\nAlcohol: 8,5%          IBU: 49         Amargor: MEDIO",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663093755/small_ipa2_710871778e.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 9,
  "name": "craft-beers",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.144Z",
  "updatedAt": "2022-09-21T05:48:50.144Z",
  "productId": 81,
  "categoryId": 9
  }
  }
  ],
  "providers": [
  {
  "id": 5,
  "name": "Cervezas Bear Creek",
  "mail": "cervezas_BearCreek@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105575/2251afaaf01643609875773b72409974_5_9214b25a24.png",
  "adress": "Los Nogales 589, Córdoba.",
  "phone": "9543517963258",
  "CUIT": "3278965412",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.183Z",
  "updatedAt": "2022-09-21T05:48:50.183Z",
  "productId": 81,
  "providerId": 5
  }
  }
  ]
  },
  {
  "id": 79,
  "title": "Kölsch",
  "price": 1000,
  "description": "DORADA / SUAVE / FRESCA / FRUTADA\n\nExisten muchas cervezas doradas y refrescantes. Pero frutadas y con destellos finales de lúpulo, sólo hay un estilo: la Kölsch. Rescatamos la antigua receta de la cerveza favorita de los bebedores en colonia, Alemania.\n\nAlcohol: 7,5%       Amargor: MODERADO",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663093533/small_KRO_7482a0480e.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 9,
  "name": "craft-beers",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.143Z",
  "updatedAt": "2022-09-21T05:48:50.143Z",
  "productId": 79,
  "categoryId": 9
  }
  }
  ],
  "providers": [
  {
  "id": 5,
  "name": "Cervezas Bear Creek",
  "mail": "cervezas_BearCreek@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105575/2251afaaf01643609875773b72409974_5_9214b25a24.png",
  "adress": "Los Nogales 589, Córdoba.",
  "phone": "9543517963258",
  "CUIT": "3278965412",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.182Z",
  "updatedAt": "2022-09-21T05:48:50.182Z",
  "productId": 79,
  "providerId": 5
  }
  }
  ]
  },
  {
  "id": 42,
  "title": "Jamón y Queso",
  "price": 1200,
  "description": "Pizza con jamón y queso muzzarella.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662726936/small_pizzas_02_a867da66c0.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 5,
  "name": "pizza",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.131Z",
  "updatedAt": "2022-09-21T05:48:50.131Z",
  "productId": 42,
  "categoryId": 5
  }
  }
  ],
  "providers": [
  {
  "id": 2,
  "name": "Panaderia PRINCESS",
  "mail": "princess_pana@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663103598/2251afaaf01643609875773b72409974_9b83b73899.png",
  "adress": "Av. Siempre Viva 1589, Córdoba.",
  "phone": "54935189657412",
  "CUIT": "3248965712595",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.172Z",
  "updatedAt": "2022-09-21T05:48:50.172Z",
  "productId": 42,
  "providerId": 2
  }
  }
  ]
  },
  {
  "id": 90,
  "title": "Picada Gourmet",
  "price": 3000,
  "description": "La especialidad de la casa. Ideal para compartir y deleitarse de sabores unicos al paladar!\n6 tipos de quesos, acompañados de rodajas de salame. Frutos secos (nueces, rodajas de duraznos y pelones secos) y frescos (frambuesas, moras, arandanos y uvas)",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663098371/medium_Picada_Gourmet_828c27f2ee.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 11,
  "name": "picadas",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.146Z",
  "updatedAt": "2022-09-21T05:48:50.146Z",
  "productId": 90,
  "categoryId": 11
  }
  }
  ],
  "providers": [
  {
  "id": 3,
  "name": "Frigorifico Ciram",
  "mail": "FriCiram@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663104880/2251afaaf01643609875773b72409974_3_47a737b240.png",
  "adress": "Av. Fuerza Aerea Argentina 2400",
  "phone": "935187896541",
  "CUIT": "3289654785266",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.190Z",
  "updatedAt": "2022-09-21T05:48:50.190Z",
  "productId": 90,
  "providerId": 3
  }
  }
  ]
  },
  {
  "id": 59,
  "title": "Coffee Box Sweet experience",
  "price": 4700,
  "description": "Una combinación de dulce y salado\nVino Malamado viognier\nCerveza Ortuzar Honney\nCerveza Baum Honney\nMiel cremosa Beepure\nDulce de Leche Chimbote o Beepure o similar\nMermelada Don Meliton\n\n*Productos y sabores sujetos a stock!\n*Foto de carácter ilustrativo!!\n\nINCLUYE BOX CONTENEDOR - INDIVIDUAL - BOLSA DE TELA.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663075237/small_sweet_1_da6f8202a3.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 7,
  "name": "coffee-boxes",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.136Z",
  "updatedAt": "2022-09-21T05:48:50.136Z",
  "productId": 59,
  "categoryId": 7
  }
  }
  ],
  "providers": [
  {
  "id": 5,
  "name": "Cervezas Bear Creek",
  "mail": "cervezas_BearCreek@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105575/2251afaaf01643609875773b72409974_5_9214b25a24.png",
  "adress": "Los Nogales 589, Córdoba.",
  "phone": "9543517963258",
  "CUIT": "3278965412",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.176Z",
  "updatedAt": "2022-09-21T05:48:50.176Z",
  "productId": 59,
  "providerId": 5
  }
  }
  ]
  },
  {
  "id": 84,
  "title": "Cielito Lindo",
  "price": 2000,
  "description": "Armate los tacos a tu gusto en la mesa! Y acompañalos con unos nachos caseros con cheddar increibles! ",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663097254/medium_Cielito_Lindo_aaa1bc543a.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 11,
  "name": "picadas",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.145Z",
  "updatedAt": "2022-09-21T05:48:50.145Z",
  "productId": 84,
  "categoryId": 11
  }
  }
  ],
  "providers": [
  {
  "id": 3,
  "name": "Frigorifico Ciram",
  "mail": "FriCiram@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663104880/2251afaaf01643609875773b72409974_3_47a737b240.png",
  "adress": "Av. Fuerza Aerea Argentina 2400",
  "phone": "935187896541",
  "CUIT": "3289654785266",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.184Z",
  "updatedAt": "2022-09-21T05:48:50.184Z",
  "productId": 84,
  "providerId": 3
  }
  }
  ]
  },
  {
  "id": 74,
  "title": "Honey Beer",
  "price": 1000,
  "description": "ÁMBAR / MIEL / SUAVE / AROMÁTICA\n\nNuestra Honey Beer recoge la historia que dio origen a “la luna de miel” y lo celebra con notas mento-ladas y frutales. Y, por supuesto, una inmersión de miel pura para abrir los corazones.\n         \nAlcohol: 5%          IBU: 15               Amargor: BAJO",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663093116/small_cerveza_trigo_fac4ab22c8.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 9,
  "name": "craft-beers",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.144Z",
  "updatedAt": "2022-09-21T05:48:50.144Z",
  "productId": 74,
  "categoryId": 9
  }
  }
  ],
  "providers": [
  {
  "id": 5,
  "name": "Cervezas Bear Creek",
  "mail": "cervezas_BearCreek@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105575/2251afaaf01643609875773b72409974_5_9214b25a24.png",
  "adress": "Los Nogales 589, Córdoba.",
  "phone": "9543517963258",
  "CUIT": "3278965412",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.183Z",
  "updatedAt": "2022-09-21T05:48:50.183Z",
  "productId": 74,
  "providerId": 5
  }
  }
  ]
  },
  {
  "id": 6,
  "title": "Frappuccino con salsa de chocolate",
  "price": 300,
  "description": "Café con hielo cubierto de espuma elaborado a partir de café instantáneo. Cubierto con salsa de chocolate.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662574199/small_cafe_06_0f3dd02024.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 1,
  "name": "coffees",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.111Z",
  "updatedAt": "2022-09-21T05:48:50.111Z",
  "productId": 6,
  "categoryId": 1
  }
  }
  ],
  "providers": [
  {
  "id": 8,
  "name": "Cafeteria Sunset",
  "mail": "SunsetRiders@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 789, Córdoba.",
  "phone": "954565369697",
  "CUIT": "3278965478596",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.157Z",
  "updatedAt": "2022-09-21T05:48:50.157Z",
  "productId": 6,
  "providerId": 8
  }
  },
  {
  "id": 2,
  "name": "Panaderia PRINCESS",
  "mail": "princess_pana@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663103598/2251afaaf01643609875773b72409974_9b83b73899.png",
  "adress": "Av. Siempre Viva 1589, Córdoba.",
  "phone": "54935189657412",
  "CUIT": "3248965712595",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.156Z",
  "updatedAt": "2022-09-21T05:48:50.156Z",
  "productId": 6,
  "providerId": 2
  }
  },
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.157Z",
  "updatedAt": "2022-09-21T05:48:50.157Z",
  "productId": 6,
  "providerId": 9
  }
  }
  ]
  },
  {
  "id": 29,
  "title": "Muffins de Vainilla",
  "price": 300,
  "description": "Paquete de 7 uds. de Muffins de Vainilla",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662590268/small_galletas_03_4adf4f597f.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 3,
  "name": "cookie",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.124Z",
  "updatedAt": "2022-09-21T05:48:50.124Z",
  "productId": 29,
  "categoryId": 3
  }
  }
  ],
  "providers": [
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.167Z",
  "updatedAt": "2022-09-21T05:48:50.167Z",
  "productId": 29,
  "providerId": 9
  }
  },
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.167Z",
  "updatedAt": "2022-09-21T05:48:50.167Z",
  "productId": 29,
  "providerId": 7
  }
  },
  {
  "id": 2,
  "name": "Panaderia PRINCESS",
  "mail": "princess_pana@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663103598/2251afaaf01643609875773b72409974_9b83b73899.png",
  "adress": "Av. Siempre Viva 1589, Córdoba.",
  "phone": "54935189657412",
  "CUIT": "3248965712595",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.167Z",
  "updatedAt": "2022-09-21T05:48:50.167Z",
  "productId": 29,
  "providerId": 2
  }
  }
  ]
  },
  {
  "id": 41,
  "title": "Hawaiana",
  "price": 1500,
  "description": "Pizza con jamón, jugosa piña y queso mozzarella.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662727660/small_pizzas_06_753fd611a6.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 5,
  "name": "pizza",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.130Z",
  "updatedAt": "2022-09-21T05:48:50.130Z",
  "productId": 41,
  "categoryId": 5
  }
  }
  ],
  "providers": [
  {
  "id": 2,
  "name": "Panaderia PRINCESS",
  "mail": "princess_pana@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663103598/2251afaaf01643609875773b72409974_9b83b73899.png",
  "adress": "Av. Siempre Viva 1589, Córdoba.",
  "phone": "54935189657412",
  "CUIT": "3248965712595",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.171Z",
  "updatedAt": "2022-09-21T05:48:50.171Z",
  "productId": 41,
  "providerId": 2
  }
  }
  ]
  },
  {
  "id": 16,
  "title": "Glazed donuts",
  "price": 500,
  "description": "3 uds. de donas glaseadas y topping de crocante.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662578346/small_donas_02_9d46c778c5.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 2,
  "name": "donuts",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.118Z",
  "updatedAt": "2022-09-21T05:48:50.118Z",
  "productId": 16,
  "categoryId": 2
  }
  }
  ],
  "providers": [
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.162Z",
  "updatedAt": "2022-09-21T05:48:50.162Z",
  "productId": 16,
  "providerId": 9
  }
  },
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.162Z",
  "updatedAt": "2022-09-21T05:48:50.162Z",
  "productId": 16,
  "providerId": 7
  }
  }
  ]
  },
  {
  "id": 54,
  "title": "Pickles",
  "price": 800,
  "description": "Hamburguesa con pan de papa, medallón de carne, pickles, lechuga y tomate.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662910215/small_hamburguesas_04_cc3a6fd45b.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 6,
  "name": "hamburguers",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.134Z",
  "updatedAt": "2022-09-21T05:48:50.134Z",
  "productId": 54,
  "categoryId": 6
  }
  }
  ],
  "providers": [
  {
  "id": 3,
  "name": "Frigorifico Ciram",
  "mail": "FriCiram@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663104880/2251afaaf01643609875773b72409974_3_47a737b240.png",
  "adress": "Av. Fuerza Aerea Argentina 2400",
  "phone": "935187896541",
  "CUIT": "3289654785266",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.174Z",
  "updatedAt": "2022-09-21T05:48:50.174Z",
  "productId": 54,
  "providerId": 3
  }
  },
  {
  "id": 4,
  "name": "Insumos Burger",
  "mail": "theBurger_Shack@outlook.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105391/2251afaaf01643609875773b72409974_4_efcdd4b9a5.png",
  "adress": "Las Leñas 2559, Córdoba.",
  "phone": "3519748596321",
  "CUIT": "3258964789632",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.174Z",
  "updatedAt": "2022-09-21T05:48:50.174Z",
  "productId": 54,
  "providerId": 4
  }
  }
  ]
  },
  {
  "id": 103,
  "title": "Ice BANANA ROYAL ",
  "price": 500,
  "description": "Helado de americana, bananas, jalea de chocolate, chantilly y frutilla o cereza",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663115942/small_paris_7fdc98fcb6.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 12,
  "name": "ice-cream",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.152Z",
  "updatedAt": "2022-09-21T05:48:50.152Z",
  "productId": 103,
  "categoryId": 12
  }
  }
  ],
  "providers": [
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.203Z",
  "updatedAt": "2022-09-21T05:48:50.203Z",
  "productId": 103,
  "providerId": 7
  }
  },
  {
  "id": 8,
  "name": "Cafeteria Sunset",
  "mail": "SunsetRiders@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 789, Córdoba.",
  "phone": "954565369697",
  "CUIT": "3278965478596",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.203Z",
  "updatedAt": "2022-09-21T05:48:50.203Z",
  "productId": 103,
  "providerId": 8
  }
  }
  ]
  },
  {
  "id": 36,
  "title": "Waffle Strawberry Cream",
  "price": 350,
  "description": "Waffle con cubierta de jalea de frutilla y centro de crema batida.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662724981/small_pastel_02_97bc2ea96a.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 4,
  "name": "cakes",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.126Z",
  "updatedAt": "2022-09-21T05:48:50.126Z",
  "productId": 36,
  "categoryId": 4
  }
  }
  ],
  "providers": [
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.169Z",
  "updatedAt": "2022-09-21T05:48:50.169Z",
  "productId": 36,
  "providerId": 7
  }
  },
  {
  "id": 2,
  "name": "Panaderia PRINCESS",
  "mail": "princess_pana@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663103598/2251afaaf01643609875773b72409974_9b83b73899.png",
  "adress": "Av. Siempre Viva 1589, Córdoba.",
  "phone": "54935189657412",
  "CUIT": "3248965712595",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.169Z",
  "updatedAt": "2022-09-21T05:48:50.169Z",
  "productId": 36,
  "providerId": 2
  }
  }
  ]
  },
  {
  "id": 4,
  "title": "Cocolatada con salsa de chocolate",
  "price": 300,
  "description": "Leche parcialmente descremada. Azúcar. Leche en polvo descremada. Cacao. Y salsa de chocolate.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662575316/small_cafe_04_83a9f09d42.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 1,
  "name": "coffees",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.113Z",
  "updatedAt": "2022-09-21T05:48:50.113Z",
  "productId": 4,
  "categoryId": 1
  }
  }
  ],
  "providers": [
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.158Z",
  "updatedAt": "2022-09-21T05:48:50.158Z",
  "productId": 4,
  "providerId": 9
  }
  },
  {
  "id": 8,
  "name": "Cafeteria Sunset",
  "mail": "SunsetRiders@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 789, Córdoba.",
  "phone": "954565369697",
  "CUIT": "3278965478596",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.158Z",
  "updatedAt": "2022-09-21T05:48:50.158Z",
  "productId": 4,
  "providerId": 8
  }
  },
  {
  "id": 2,
  "name": "Panaderia PRINCESS",
  "mail": "princess_pana@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663103598/2251afaaf01643609875773b72409974_9b83b73899.png",
  "adress": "Av. Siempre Viva 1589, Córdoba.",
  "phone": "54935189657412",
  "CUIT": "3248965712595",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.158Z",
  "updatedAt": "2022-09-21T05:48:50.158Z",
  "productId": 4,
  "providerId": 2
  }
  }
  ]
  },
  {
  "id": 53,
  "title": "Mexican",
  "price": 800,
  "description": "Hamburguesa con pan de papa, medallón de pollo, queso mozzarella, lechuga, tomate y  chili.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662910173/small_hamburguesas_03_5cd0608111.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 6,
  "name": "hamburguers",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.134Z",
  "updatedAt": "2022-09-21T05:48:50.134Z",
  "productId": 53,
  "categoryId": 6
  }
  }
  ],
  "providers": [
  {
  "id": 3,
  "name": "Frigorifico Ciram",
  "mail": "FriCiram@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663104880/2251afaaf01643609875773b72409974_3_47a737b240.png",
  "adress": "Av. Fuerza Aerea Argentina 2400",
  "phone": "935187896541",
  "CUIT": "3289654785266",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.174Z",
  "updatedAt": "2022-09-21T05:48:50.174Z",
  "productId": 53,
  "providerId": 3
  }
  },
  {
  "id": 4,
  "name": "Insumos Burger",
  "mail": "theBurger_Shack@outlook.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105391/2251afaaf01643609875773b72409974_4_efcdd4b9a5.png",
  "adress": "Las Leñas 2559, Córdoba.",
  "phone": "3519748596321",
  "CUIT": "3258964789632",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.174Z",
  "updatedAt": "2022-09-21T05:48:50.174Z",
  "productId": 53,
  "providerId": 4
  }
  }
  ]
  },
  {
  "id": 92,
  "title": "Tabla Milas",
  "price": 3000,
  "description": "Trozos de milanesa de cerdo, de pollo y ternera fritas. Tomates rellenos de queso y orégano fresco.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663099375/medium_Tabla_Mila_ca0bc9035f.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 11,
  "name": "picadas",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.149Z",
  "updatedAt": "2022-09-21T05:48:50.149Z",
  "productId": 92,
  "categoryId": 11
  }
  }
  ],
  "providers": [
  {
  "id": 3,
  "name": "Frigorifico Ciram",
  "mail": "FriCiram@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663104880/2251afaaf01643609875773b72409974_3_47a737b240.png",
  "adress": "Av. Fuerza Aerea Argentina 2400",
  "phone": "935187896541",
  "CUIT": "3289654785266",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.193Z",
  "updatedAt": "2022-09-21T05:48:50.193Z",
  "productId": 92,
  "providerId": 3
  }
  }
  ]
  },
  {
  "id": 58,
  "title": "Doble Hot Dogs",
  "price": 1200,
  "description": "2 uds. de pancho tradicional",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662910504/small_hamburguesas_08_5790f23f86.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 6,
  "name": "hamburguers",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.136Z",
  "updatedAt": "2022-09-21T05:48:50.136Z",
  "productId": 58,
  "categoryId": 6
  }
  }
  ],
  "providers": [
  {
  "id": 4,
  "name": "Insumos Burger",
  "mail": "theBurger_Shack@outlook.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105391/2251afaaf01643609875773b72409974_4_efcdd4b9a5.png",
  "adress": "Las Leñas 2559, Córdoba.",
  "phone": "3519748596321",
  "CUIT": "3258964789632",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.176Z",
  "updatedAt": "2022-09-21T05:48:50.176Z",
  "productId": 58,
  "providerId": 4
  }
  },
  {
  "id": 3,
  "name": "Frigorifico Ciram",
  "mail": "FriCiram@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663104880/2251afaaf01643609875773b72409974_3_47a737b240.png",
  "adress": "Av. Fuerza Aerea Argentina 2400",
  "phone": "935187896541",
  "CUIT": "3289654785266",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.176Z",
  "updatedAt": "2022-09-21T05:48:50.176Z",
  "productId": 58,
  "providerId": 3
  }
  }
  ]
  },
  {
  "id": 1,
  "title": "Cappuccino",
  "price": 300,
  "description": "Expresso, vapor y espuma de leche a partes iguales.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662574498/small_cafe_01_852d1fd7ea.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 1,
  "name": "coffees",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.108Z",
  "updatedAt": "2022-09-21T05:48:50.108Z",
  "productId": 1,
  "categoryId": 1
  }
  }
  ],
  "providers": [
  {
  "id": 8,
  "name": "Cafeteria Sunset",
  "mail": "SunsetRiders@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 789, Córdoba.",
  "phone": "954565369697",
  "CUIT": "3278965478596",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.156Z",
  "updatedAt": "2022-09-21T05:48:50.156Z",
  "productId": 1,
  "providerId": 8
  }
  },
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.157Z",
  "updatedAt": "2022-09-21T05:48:50.157Z",
  "productId": 1,
  "providerId": 9
  }
  },
  {
  "id": 2,
  "name": "Panaderia PRINCESS",
  "mail": "princess_pana@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663103598/2251afaaf01643609875773b72409974_9b83b73899.png",
  "adress": "Av. Siempre Viva 1589, Córdoba.",
  "phone": "54935189657412",
  "CUIT": "3248965712595",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.155Z",
  "updatedAt": "2022-09-21T05:48:50.155Z",
  "productId": 1,
  "providerId": 2
  }
  }
  ]
  },
  {
  "id": 111,
  "title": "Smoothie Chocolate",
  "price": 600,
  "description": "2 bochas de helado de chocolate, salsa de chocolate, chocolate y crema batida .",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663117982/small_chocolate_c9bd33dca9.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 12,
  "name": "ice-cream",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.155Z",
  "updatedAt": "2022-09-21T05:48:50.155Z",
  "productId": 111,
  "categoryId": 12
  }
  }
  ],
  "providers": [
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.204Z",
  "updatedAt": "2022-09-21T05:48:50.204Z",
  "productId": 111,
  "providerId": 7
  }
  },
  {
  "id": 8,
  "name": "Cafeteria Sunset",
  "mail": "SunsetRiders@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 789, Córdoba.",
  "phone": "954565369697",
  "CUIT": "3278965478596",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.204Z",
  "updatedAt": "2022-09-21T05:48:50.204Z",
  "productId": 111,
  "providerId": 8
  }
  }
  ]
  },
  {
  "id": 86,
  "title": "Tabla Desmechada",
  "price": 3000,
  "description": "Ternera desmechada, champignones salteados, tomates asados y mezclum de verdes. Acompañado de salsa criolla, salsa barbacoa casera, salsa teriyaki, mayonesa de apio, alioli, pan pita recien horneado!",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663097659/small_Tabla_Desmechada_fb2371885d.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 11,
  "name": "picadas",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.145Z",
  "updatedAt": "2022-09-21T05:48:50.145Z",
  "productId": 86,
  "categoryId": 11
  }
  }
  ],
  "providers": [
  {
  "id": 3,
  "name": "Frigorifico Ciram",
  "mail": "FriCiram@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663104880/2251afaaf01643609875773b72409974_3_47a737b240.png",
  "adress": "Av. Fuerza Aerea Argentina 2400",
  "phone": "935187896541",
  "CUIT": "3289654785266",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.185Z",
  "updatedAt": "2022-09-21T05:48:50.185Z",
  "productId": 86,
  "providerId": 3
  }
  }
  ]
  },
  {
  "id": 22,
  "title": "Pack Donuts Rocklets",
  "price": 550,
  "description": "3 uds. de donas con baño de chocolate y toppings Roclets.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 2,
  "name": "donuts",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.121Z",
  "updatedAt": "2022-09-21T05:48:50.121Z",
  "productId": 22,
  "categoryId": 2
  }
  }
  ],
  "providers": [
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.163Z",
  "updatedAt": "2022-09-21T05:48:50.163Z",
  "productId": 22,
  "providerId": 9
  }
  },
  {
  "id": 7,
  "name": "Insumos de pasteleria \"La Pasteleria\"",
  "mail": "laPasteleria_44@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105975/2251afaaf01643609875773b72409974_7_a42a0a9fe8.png",
  "adress": "Av. Los Granaderos 1569, Córdoba.",
  "phone": "9543517456321",
  "CUIT": "325896478965",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.163Z",
  "updatedAt": "2022-09-21T05:48:50.163Z",
  "productId": 22,
  "providerId": 7
  }
  }
  ]
  },
  {
  "id": 45,
  "title": "Bacon",
  "price": 1500,
  "description": "Pizza con queso muzzarella, bacon y rodajas de cebolla morada.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662727776/small_pizzas_07_5a58d161ea.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 5,
  "name": "pizza",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.133Z",
  "updatedAt": "2022-09-21T05:48:50.133Z",
  "productId": 45,
  "categoryId": 5
  }
  }
  ],
  "providers": [
  {
  "id": 2,
  "name": "Panaderia PRINCESS",
  "mail": "princess_pana@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663103598/2251afaaf01643609875773b72409974_9b83b73899.png",
  "adress": "Av. Siempre Viva 1589, Córdoba.",
  "phone": "54935189657412",
  "CUIT": "3248965712595",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.173Z",
  "updatedAt": "2022-09-21T05:48:50.173Z",
  "productId": 45,
  "providerId": 2
  }
  }
  ]
  },
  {
  "id": 60,
  "title": "Coffee Box Nacionales",
  "price": 2550,
  "description": "Un mix de 6 estilos de cervezas artesanales nacionales. \n\nINCLUYE BOX CONTENEDOR - INDIVIDUAL - BOLSA DE TELA.\n\n *Foto de carácter ilustrativo!!\n*Productos y sabores sujetos a stock!",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663075544/small_mix_1_99237f84cd.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 7,
  "name": "coffee-boxes",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.136Z",
  "updatedAt": "2022-09-21T05:48:50.136Z",
  "productId": 60,
  "categoryId": 7
  }
  }
  ],
  "providers": [
  {
  "id": 5,
  "name": "Cervezas Bear Creek",
  "mail": "cervezas_BearCreek@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105575/2251afaaf01643609875773b72409974_5_9214b25a24.png",
  "adress": "Los Nogales 589, Córdoba.",
  "phone": "9543517963258",
  "CUIT": "3278965412",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.175Z",
  "updatedAt": "2022-09-21T05:48:50.175Z",
  "productId": 60,
  "providerId": 5
  }
  }
  ]
  },
  {
  "id": 105,
  "title": "Agua saborizada Naranja",
  "price": 250,
  "description": "Agua sabor Naranja -Aquarius 500ml.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663113925/small_Aquarius_Naranja_botella_500ml_vaso_blanco_1_488e6267c1.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 10,
  "name": "gaseosas-aguas",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.152Z",
  "updatedAt": "2022-09-21T05:48:50.152Z",
  "productId": 105,
  "categoryId": 10
  }
  }
  ],
  "providers": [
  {
  "id": 8,
  "name": "Cafeteria Sunset",
  "mail": "SunsetRiders@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 789, Córdoba.",
  "phone": "954565369697",
  "CUIT": "3278965478596",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.203Z",
  "updatedAt": "2022-09-21T05:48:50.203Z",
  "productId": 105,
  "providerId": 8
  }
  }
  ]
  },
  {
  "id": 75,
  "title": "Imperial Stout",
  "price": 1000,
  "description": "NEGRA / FUERTE / INTENSA / LICOROSA\n\nLa Imperial Stout, negra y tostada, empapada de alcohol y pasas, amarga y ahumada.\nEsencia inglesa de exportación. Tímidos, abstenerse =).\n\nAlcohol: 8,5%          IBU: 49                Amargor: MEDIO",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663093196/small_cerveza_negra_9463cf427f.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 9,
  "name": "craft-beers",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.143Z",
  "updatedAt": "2022-09-21T05:48:50.143Z",
  "productId": 75,
  "categoryId": 9
  }
  }
  ],
  "providers": [
  {
  "id": 5,
  "name": "Cervezas Bear Creek",
  "mail": "cervezas_BearCreek@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105575/2251afaaf01643609875773b72409974_5_9214b25a24.png",
  "adress": "Los Nogales 589, Córdoba.",
  "phone": "9543517963258",
  "CUIT": "3278965412",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.182Z",
  "updatedAt": "2022-09-21T05:48:50.182Z",
  "productId": 75,
  "providerId": 5
  }
  }
  ]
  },
  {
  "id": 43,
  "title": "Especial de la Casa",
  "price": 1200,
  "description": "Pizza con doble queso muzzarella y pepperoni.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662727146/small_pizzas_04_d683e10524.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 5,
  "name": "pizza",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.131Z",
  "updatedAt": "2022-09-21T05:48:50.131Z",
  "productId": 43,
  "categoryId": 5
  }
  }
  ],
  "providers": [
  {
  "id": 2,
  "name": "Panaderia PRINCESS",
  "mail": "princess_pana@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663103598/2251afaaf01643609875773b72409974_9b83b73899.png",
  "adress": "Av. Siempre Viva 1589, Córdoba.",
  "phone": "54935189657412",
  "CUIT": "3248965712595",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.172Z",
  "updatedAt": "2022-09-21T05:48:50.172Z",
  "productId": 43,
  "providerId": 2
  }
  }
  ]
  },
  {
  "id": 3,
  "title": "Caramel Macchiato",
  "price": 300,
  "description": "Leche al vapor manchada con espresso y un toque de vainilla. Dulce, intenso y único.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662575076/small_cafe_03_97d20f9703.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 1,
  "name": "coffees",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.112Z",
  "updatedAt": "2022-09-21T05:48:50.112Z",
  "productId": 3,
  "categoryId": 1
  }
  }
  ],
  "providers": [
  {
  "id": 8,
  "name": "Cafeteria Sunset",
  "mail": "SunsetRiders@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 789, Córdoba.",
  "phone": "954565369697",
  "CUIT": "3278965478596",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.158Z",
  "updatedAt": "2022-09-21T05:48:50.158Z",
  "productId": 3,
  "providerId": 8
  }
  },
  {
  "id": 2,
  "name": "Panaderia PRINCESS",
  "mail": "princess_pana@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663103598/2251afaaf01643609875773b72409974_9b83b73899.png",
  "adress": "Av. Siempre Viva 1589, Córdoba.",
  "phone": "54935189657412",
  "CUIT": "3248965712595",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.158Z",
  "updatedAt": "2022-09-21T05:48:50.158Z",
  "productId": 3,
  "providerId": 2
  }
  },
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.158Z",
  "updatedAt": "2022-09-21T05:48:50.158Z",
  "productId": 3,
  "providerId": 9
  }
  }
  ]
  },
  {
  "id": 61,
  "title": "Coffee Box Pick",
  "price": 4100,
  "description": "Una combinación perfecta de sabores!\n\nCerveza Ortuzar Honey\nCerveza Ortuzar Porter\nCerveza Ortuzar Scottish\nCerveza Ortuzar Golden\nPicada individual de quesos y fiambres envasados al vacío\nPasta de ajo Príncipe de Lujan\n1 Dip Valleverde\n\nINCLUYE BOX CONTENEDOR - INDIVIDUAL - BOLSA DE TELA.\n\n*Foto de carácter ilustrativo!!\n*Productos y sabores sujetos a stock!\n1 Mani King\n\n",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663076224/small_pick_f48359c5fc.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 7,
  "name": "coffee-boxes",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.137Z",
  "updatedAt": "2022-09-21T05:48:50.137Z",
  "productId": 61,
  "categoryId": 7
  }
  }
  ],
  "providers": [
  {
  "id": 5,
  "name": "Cervezas Bear Creek",
  "mail": "cervezas_BearCreek@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105575/2251afaaf01643609875773b72409974_5_9214b25a24.png",
  "adress": "Los Nogales 589, Córdoba.",
  "phone": "9543517963258",
  "CUIT": "3278965412",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.176Z",
  "updatedAt": "2022-09-21T05:48:50.176Z",
  "productId": 61,
  "providerId": 5
  }
  }
  ]
  },
  {
  "id": 87,
  "title": "Tabla Aloha Individual",
  "price": 1000,
  "description": "Rodajas de salame, queso feta y cheddar, rodajas de arrollado, galletas secas. Y el toque especial de frutillas y uvas. Servido individualmente.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663097710/medium_Picada_Aloha_Individual_5e7d6b0e24.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 11,
  "name": "picadas",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.146Z",
  "updatedAt": "2022-09-21T05:48:50.146Z",
  "productId": 87,
  "categoryId": 11
  }
  }
  ],
  "providers": [
  {
  "id": 3,
  "name": "Frigorifico Ciram",
  "mail": "FriCiram@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663104880/2251afaaf01643609875773b72409974_3_47a737b240.png",
  "adress": "Av. Fuerza Aerea Argentina 2400",
  "phone": "935187896541",
  "CUIT": "3289654785266",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.187Z",
  "updatedAt": "2022-09-21T05:48:50.187Z",
  "productId": 87,
  "providerId": 3
  }
  }
  ]
  },
  {
  "id": 63,
  "title": "Coffee Box 6 Ipas",
  "price": 2950,
  "description": "Selección de 6 cervezas ipas nacionales.\n\nINCLUYE BOX CONTENEDOR - INDIVIDUAL - BOLSA DE TELA.\n\n*Foto de carácter ilustrativo!!\n*Productos y sabores sujetos a stock!\n\n",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663076326/small_ipas_6d1880de5a.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 7,
  "name": "coffee-boxes",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.138Z",
  "updatedAt": "2022-09-21T05:48:50.138Z",
  "productId": 63,
  "categoryId": 7
  }
  }
  ],
  "providers": [
  {
  "id": 5,
  "name": "Cervezas Bear Creek",
  "mail": "cervezas_BearCreek@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663105575/2251afaaf01643609875773b72409974_5_9214b25a24.png",
  "adress": "Los Nogales 589, Córdoba.",
  "phone": "9543517963258",
  "CUIT": "3278965412",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.177Z",
  "updatedAt": "2022-09-21T05:48:50.177Z",
  "productId": 63,
  "providerId": 5
  }
  }
  ]
  },
  {
  "id": 9,
  "title": "Chocolatada fria",
  "price": 300,
  "description": "Leche fria con cacao.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662575257/small_cafe_07_2b63f11b55.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 1,
  "name": "coffees",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.116Z",
  "updatedAt": "2022-09-21T05:48:50.116Z",
  "productId": 9,
  "categoryId": 1
  }
  }
  ],
  "providers": [
  {
  "id": 8,
  "name": "Cafeteria Sunset",
  "mail": "SunsetRiders@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 789, Córdoba.",
  "phone": "954565369697",
  "CUIT": "3278965478596",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.160Z",
  "updatedAt": "2022-09-21T05:48:50.160Z",
  "productId": 9,
  "providerId": 8
  }
  },
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.160Z",
  "updatedAt": "2022-09-21T05:48:50.160Z",
  "productId": 9,
  "providerId": 9
  }
  }
  ]
  },
  {
  "id": 88,
  "title": "Tabla Caliente",
  "price": 2500,
  "description": "Tabla de papas fritas rabas, aros de cebolla y bastoncillos de mozzarella. ",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663097944/small_Picada_Caliente_dc3b1d0d21.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 11,
  "name": "picadas",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.147Z",
  "updatedAt": "2022-09-21T05:48:50.147Z",
  "productId": 88,
  "categoryId": 11
  }
  }
  ],
  "providers": [
  {
  "id": 3,
  "name": "Frigorifico Ciram",
  "mail": "FriCiram@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663104880/2251afaaf01643609875773b72409974_3_47a737b240.png",
  "adress": "Av. Fuerza Aerea Argentina 2400",
  "phone": "935187896541",
  "CUIT": "3289654785266",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.191Z",
  "updatedAt": "2022-09-21T05:48:50.191Z",
  "productId": 88,
  "providerId": 3
  }
  }
  ]
  },
  {
  "id": 7,
  "title": "Café con leche.",
  "price": 300,
  "description": "Leche y expresso.",
  "image": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662574835/small_cafe_08_3f5a0630d1.jpg",
  "disable": false,
  "like": 0,
  "stock": 0,
  "sale_count": 0,
  "cost": null,
  "margin": null,
  "diets": [],
  "categories": [
  {
  "id": 1,
  "name": "coffees",
  "product_category": {
  "createdAt": "2022-09-21T05:48:50.114Z",
  "updatedAt": "2022-09-21T05:48:50.114Z",
  "productId": 7,
  "categoryId": 1
  }
  }
  ],
  "providers": [
  {
  "id": 2,
  "name": "Panaderia PRINCESS",
  "mail": "princess_pana@gmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1663103598/2251afaaf01643609875773b72409974_9b83b73899.png",
  "adress": "Av. Siempre Viva 1589, Córdoba.",
  "phone": "54935189657412",
  "CUIT": "3248965712595",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.159Z",
  "updatedAt": "2022-09-21T05:48:50.159Z",
  "productId": 7,
  "providerId": 2
  }
  },
  {
  "id": 9,
  "name": "Crispy Breaskfast",
  "mail": "crispyB@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 1556, Córdoba.",
  "phone": "9543513565698",
  "CUIT": "32969658423682",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.159Z",
  "updatedAt": "2022-09-21T05:48:50.159Z",
  "productId": 7,
  "providerId": 9
  }
  },
  {
  "id": 8,
  "name": "Cafeteria Sunset",
  "mail": "SunsetRiders@hotmail.com",
  "logo": "https://res.cloudinary.com/dwtwnertr/image/upload/v1662584676/small_donas_08_e8fa851913.jpg",
  "adress": "Miguel Carcano 789, Córdoba.",
  "phone": "954565369697",
  "CUIT": "3278965478596",
  "disable": false,
  "product_provider": {
  "createdAt": "2022-09-21T05:48:50.159Z",
  "updatedAt": "2022-09-21T05:48:50.159Z",
  "productId": 7,
  "providerId": 8
  }
  }
  ]
  }
  ]

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    //console.log(data);
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>CRUD App</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </div>
  );
};

export default CrudApp;
