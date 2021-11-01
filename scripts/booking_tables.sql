CREATE DATABASE booking;
USE booking;

CREATE TABLE users (
    PRIMARY KEY (id), 
    id 				BIGINT,
    email 			VARCHAR(50), 
    password 		VARCHAR(20)
);

CREATE TABLE user_info (
    PRIMARY KEY (id),
    id 				BIGINT,
    user_id         BIGINT 			NOT NULL,
    first_name		VARCHAR(50),
    last_name		VARCHAR(50),
    photo			VARCHAR(256)
);

CREATE TABLE roles (
	PRIMARY KEY (id),
    id 				BIGINT,
    name			VARCHAR(50)
);

CREATE TABLE users_roles (
	PRIMARY KEY (id),
    id 				BIGINT,
    user_id         BIGINT 			NOT NULL,
    role_id         BIGINT 			NOT NULL
);

CREATE TABLE hotels (
	PRIMARY KEY (id),
    id 				BIGINT,
    name			VARCHAR(256),
    photo			VARCHAR(256),
    description     TEXT 			NOT NULL
);

CREATE TABLE rooms (
	PRIMARY KEY (id),
    id 				BIGINT,
    hotel_id        BIGINT 			NOT NULL,
    photo			VARCHAR(256),
    type		    INTEGER,
    cost			DOUBLE,
    free			BOOLEAN
);

CREATE TABLE booking (
	PRIMARY KEY (id),
    id 				BIGINT,
    user_id      	BIGINT 			NOT NULL,
    room_id         BIGINT 			NOT NULL,
    start_date		DATE,
    end_date		DATE,
    cost			DOUBLE
);

CREATE TABLE reviews (
	PRIMARY KEY (id),
    id 				BIGINT,
    hotel_id        BIGINT 			NOT NULL,
    user_id      	BIGINT 			NOT NULL,
    message			TEXT,
    date_of_writing	DATE,
    rate			INTEGER
);


ALTER TABLE user_info
	ADD CONSTRAINT FK_user_info_user_id_users_id
	FOREIGN KEY(user_id) REFERENCES users(id)
		ON DELETE CASCADE 
		ON UPDATE CASCADE;
        
ALTER TABLE users_roles
	ADD CONSTRAINT FK_user_roles_user_id_users_id
	FOREIGN KEY(user_id) REFERENCES users(id)
		ON DELETE CASCADE 
		ON UPDATE CASCADE;
        
ALTER TABLE booking
	ADD CONSTRAINT FK_booking_user_id_users_id
	FOREIGN KEY(user_id) REFERENCES users(id)
		ON DELETE CASCADE 
		ON UPDATE CASCADE;
        
ALTER TABLE reviews
	ADD CONSTRAINT FK_reviews_user_id_users_id
	FOREIGN KEY(user_id) REFERENCES users(id)
		ON DELETE CASCADE 
		ON UPDATE CASCADE;
        
ALTER TABLE users_roles
	ADD CONSTRAINT FK_users_roles_role_id_roles_id
	FOREIGN KEY(role_id) REFERENCES roles(id)
		ON DELETE CASCADE 
		ON UPDATE CASCADE;
        
ALTER TABLE rooms
	ADD CONSTRAINT FK_rooms_hotel_id_hotels_id
	FOREIGN KEY(hotel_id) REFERENCES hotels(id)
		ON DELETE CASCADE 
		ON UPDATE CASCADE;
        
ALTER TABLE reviews
	ADD CONSTRAINT FK_reviews_hotel_id_hotels_id
	FOREIGN KEY(hotel_id) REFERENCES hotels(id)
		ON DELETE CASCADE 
		ON UPDATE CASCADE;
        
ALTER TABLE booking
	ADD CONSTRAINT FK_booking_room_id_rooms_id
	FOREIGN KEY(room_id) REFERENCES rooms(id)
		ON DELETE CASCADE 
		ON UPDATE CASCADE;