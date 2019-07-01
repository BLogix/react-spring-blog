drop table if exists types;
drop table if exists meats;
drop table if exists sides;
drop table if exists sizes;

create table types (
    id int auto_increment primary key,
    name varchar(50)
);

create table meats (
    id int auto_increment primary key,
    name varchar(50)
);

create table sides (
    id int auto_increment primary key,
    name varchar(50)
);

create table sizes (
    id int auto_increment primary key,
    name varchar(50)
);

insert into types (name) values
    ('taco'), ('burger'), ('panini'), ('sausage');

insert into meats (name) values
    ('chicken'), ('beef'), ('charizo'), ('turkey');

insert into sides (name) values
    ('french fries'), ('tots'), ('chips'), ('a salad');

insert into sizes (name) values
    ('small'), ('medium'), ('large');