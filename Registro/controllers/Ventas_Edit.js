<div class="container mt-5">
    <div class="row">
        <div class="cold-md-5">

        </div>
        <div class="card">
            <div class="card-body">
            <form action="/update/<%=data.id %>" method="POST">
        Id_Pedido <div class="input-group">
          <div class="col-sm-4">
              <input type="search" class="form-control"  aria-label="Search"
                  aria-describedby="search-addon" />
          </div>
          <button type="button" class="btn btn-outline-primary"
              style="background-color: #58bbae; border: #58bbae; color:#ffffff; text-align:center">Buscar</button>
      </div> 
      <br>
      Fecha_Venta <div class="input-group">
        <div class="col-sm-4">
            <input type="search" class="form-control"  aria-label="Search"
                aria-describedby="search-addon" />
        </div>
        <button type="button" class="btn btn-outline-primary"
            style="background-color: #58bbae; border: #58bbae; color:#ffffff; text-align:center">Buscar</button>
    </div><br>
        
        Documento Id_cliente <div class="input-group">
          <div class="col-sm-4">
              <input type="search" class="form-control"  aria-label="Search"
                  aria-describedby="search-addon" />
          </div>
          <button type="button" class="btn btn-outline-primary"
              style="background-color: #58bbae; border: #58bbae; color:#ffffff; text-align:center">Buscar</button>
      </div><br>
      nombre_cliente <div class="input-group">
        <div class="col-sm-4">
            <input type="search" class="form-control" aria-label="Search" name="nombre_cliente" placeholder="nombre_cliente"
                aria-describedby="search-addon" />
        </div>
        <button type="button" class="btn btn-outline-primary"
            style="background-color: #58bbae; border: #58bbae; color:#ffffff; text-align:center">Buscar</button>
    </div><br>
    <br>
    id_Venta <div class="input-group">
      <div class="col-sm-4">
          <input type="search" class="form-control"  aria-label="Search" name="id_Venta" placeholder="id_Venta"
              aria-describedby="search-addon" />
              <button type="submit" class="btn btn-primary">Registrar Venta </button>
      </div>
      <button type="button" class="btn btn-outline-primary"
      Edit Ventas
          style="background-color: #58bbae; border: #58bbae; color:#ffffff; text-align:center">Buscar</button>
  </div><br><br>
               
        
       
    </div>   
    </form>

            </div>
        </div>
    </div>
</div>