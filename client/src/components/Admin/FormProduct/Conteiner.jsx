import React, { Fragment } from 'react';
import FormularioProducto from './ProductCreate';

export default function Conteiner() {

  return (
    <Fragment>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Administrador</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <a class="nav-link" href="./home">Home</a>
              <a class="nav-link" href="#">Proveedores</a>
              <a class="nav-link" href="#">Usuarios</a>
            </div>
          </div>
        </div>
      </nav>
      <div class="container my-3 py-5">
        <div class="row">
          <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 py-4 bg-white">
            <FormularioProducto/>
          </div>
          <div class="col-sm-12 col-md-8 col-lg-8 col-xl-8 py-4 bg-white">
            <h2>Listado de lenguajes</h2>
            <table class="table table-dark table-striped">
              <thead>
                <tr>
                  <th class="centrado">#</th>
                  <th class="centrado">Lenguaje</th>
                  <th class="centrado">Cantidad de programadores</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="centrado">1</td>
                  <td class="centrado">JavaScript</td>
                  <td class="centrado">21</td>
                </tr>
                <tr>
                  <td class="centrado">2</td>
                  <td class="centrado">Python</td>
                  <td class="centrado">110</td>
                </tr>
                <tr>
                  <td class="centrado">3</td>
                  <td class="centrado">C#</td>
                  <td class="centrado">45</td>
                </tr>
                <tr>
                  <td class="centrado">4</td>
                  <td class="centrado">Ruby</td>
                  <td class="centrado">31</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  )
}