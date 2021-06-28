CREATE TABLE users IF NOT EXISTS (

    user_id         serial primary key,
    user_name       varchar(150) not null,
    user_firstname  varchar(150) not null ,
    user_email      varchar(150) not null,
    user_password   varchar(150) not null
);

CREATE TABLE user_info IF NOT EXISTS (

    user_info_id             number,
    user_nationality         varchar(150) not null,
    user_phone_number        varchar(150) not null ,
    user_address             varchar(150) not null,
    user_department          varchar(150) not null,
    user_city                varchar(150) not null ,
    user_zip_code            varchar(150) not null,
    user_country             varchar(150) not null,
    is_partner               varchar(150) not null,
    user_right               varchar() not null,

    /*Clés étrangères */

    FOREIGN KEY(user_info_id) REFERENCES users(user_id)

);



CREATE TABLE jobs IF NOT EXISTS (

    job_id              serial primary key,
    job_title           varchar(150) not null,
    job_contract_type        varchar(150) not null ,
    job_presentation_pdf             varchar(150) not null,
    job_presentation_video          varchar(150) not null,
    job_country                varchar(150) not null ,
    job_department            varchar(150) not null,
    job_city             varchar(150) not null,
    job_zip_code          varchar(150) not null,
    right               varchar() not null
);