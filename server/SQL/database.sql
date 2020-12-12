DROP DATABASE IF EXISTS duck_feeding_tracker;

CREATE DATABASE duck_feeding_tracker;
USE duck_feeding_tracker;

CREATE TABLE country
(
    id              VARCHAR(2)  PRIMARY KEY,
    country_name    VARCHAR(45) NOT NULL
);

CREATE TABLE duck_food
(
    id          INT         AUTO_INCREMENT PRIMARY KEY,
    food_type   VARCHAR(45) NOT NULL
);

CREATE TABLE duck_feed_dataset
(
    id                  INT             AUTO_INCREMENT PRIMARY KEY,
    food_type_id        INT             NOT NULL,
    food_description    VARCHAR(100)    NULL,
    food_qty_gms        INT             NOT NULL,
    no_of_ducks         INT             NOT NULL,
    country_id          VARCHAR(2)      NOT NULL,
    feed_time           TIME            NOT NULL,
    feed_date           DATE            NOT NULL,
    park_location       VARCHAR(45)     NULL,
    is_repetitive       TINYINT         NULL,
    participant_name    VARCHAR(45)     NULL,
    participant_email   VARCHAR(320)    NULL,
    CONSTRAINT country_fk 
    FOREIGN KEY (country_id) REFERENCES country (id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT food_type_fk
    FOREIGN KEY (food_type_id) REFERENCES duck_food (id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
);
