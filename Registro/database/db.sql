--creating the database
create database Antonela_Reposteria;
show databases;
use Antonela_Reposteria;

create table productos(
id_producto int auto_increment primary key,
descripcion_producto varchar(50) not null,
estado_producto varchar(11) not null,
precio_producto int not null)
engine=innodb;

desc productos;

create table usuarios(
id_usuarios int auto_increment primary key,
tipo_documento varchar(20) not null,
num_identificacion varchar(11) not null,
nombre_usuario varchar(50) not null,
estado varchar(11) not null,
rol varchar(11) not null,
email varchar(20) not null,
telefono_usuario varchar(11) not null)
engine=innodb;

desc usuarios;

create table ventas(
id_venta int auto_increment primary key,
fecha_venta varchar(10) not null,
doc_identificacion_cliente varchar(10) not null,
nombre_cliente varchar(50) not null,
estado_producto varchar(11) not null,
id_prod int not null,
id_user int not null,
foreign key(id_prod) references productos(id_producto),
foreign key(id_user) references usuarios(id_usuarios))
engine=innodb;

desc ventas;

create table prod_vent(
cod_prod int not null,
cod_vent int not null,
cantidad int not null,
primary key(cod_prod,cod_vent),
foreign key(cod_prod) references productos(id_producto),
foreign key(cod_vent) references ventas(id_venta))
engine=innodb;

desc prod_vent;
