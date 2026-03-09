CREATE TABLE theater (id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, name VARCHAR(50) not null, capacity INTEGER not null);
CREATE TABLE movie (id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, name VARCHAR(50) not null, actors VARCHAR(200) not null);
CREATE TABLE timeslot (id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, start_time VARCHAR(5) not null, end_time VARCHAR(5) not null);
CREATE TABLE show_timing (id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, day DATE not null, theater_id INTEGER not null, movie_id INTEGER not null, timing_id INTEGER not null);
CREATE TABLE sales (id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, amount FLOAT not null);
CREATE TABLE points (id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY, points INTEGER not null);