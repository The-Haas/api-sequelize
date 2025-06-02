create table tasks (
	id serial primary key,
	description text not null,
	done boolean not null default false
);

create table department (
	id serial primary key,
	name text not null
);

alter table tasks add column id_department integer;
alter table tasks add foreign key (id_department) references department (id);

CREATE TABLE sales (
  id SERIAL PRIMARY KEY,
  description TEXT NOT NULL,
  value NUMERIC(10, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);