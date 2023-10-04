CREATE TABLE claim_logs (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    logs_id INT NOT NULL,
    logs_type VARCHAR(10) NOT NULL,
    logs_time BIGINT NOT NULL
    source_id INT NOT NULL,
    source_name VARCHAR(100) NOT NULL,
    source_avatar_url VARCHAR(500) NOT NULL,
    source_level INT NOT NULL,
    source_cardCount INT NOT NULL,
    target_id INT NOT NULL,
    target_name VARCHAR(100) NOT NULL,
    target_avatar_url VARCHAR(500) NOT NULL,
    target_level INT NOT NULL,
    target_cardCount INT NOT NULL,
    optionalCardData_id INT NOT NULL,
    optionalCardData_name VARCHAR(100) NOT NULL,
    optionalCardData_sourceName VARCHAR(100) NOT NULL,
    optionalCardData_stars INT NOT NULL,
    optionalCardData_picture VARCHAR(500) NOT NULL,
    content_cardId INT NOT NULL
);

CREATE TABLE treasure_logs (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    logs_id INT NOT NULL,
    logs_type VARCHAR(10) NOT NULL,
    logs_time BIGINT NOT NULL
    source_id INT NOT NULL,
    source_name VARCHAR(100) NOT NULL,
    source_avatar_url VARCHAR(500) NOT NULL,
    source_level INT NOT NULL,
    source_cardCount INT NOT NULL,
    content_shard INT NOT NULL,
    content_xp INT NOT NULL,
    content_mana INT NOT NULL,
    content_combo INT NOT NULL
);

CREATE TABLE comet_logs (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    logs_id INT NOT NULL,
    logs_type VARCHAR(10) NOT NULL,
    logs_time BIGINT NOT NULL
    source_id INT NOT NULL,
    source_name VARCHAR(100) NOT NULL,
    source_avatar_url VARCHAR(500) NOT NULL,
    source_level INT NOT NULL,
    source_cardCount INT NOT NULL,
    content_type VARCHAR(100) NOT NULL,
);

CREATE TABLE trade_logs (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    logs_id INT NOT NULL,
    logs_type VARCHAR(10) NOT NULL,
    logs_time BIGINT NOT NULL
    source_id INT NOT NULL,
    source_name VARCHAR(100) NOT NULL,
    source_avatar_url VARCHAR(500) NOT NULL,
    source_level INT NOT NULL,
    source_cardCount INT NOT NULL,
    target_id INT NOT NULL,
    target_name VARCHAR(100) NOT NULL,
    target_avatar_url VARCHAR(500) NOT NULL,
    target_level INT NOT NULL,
    target_cardCount INT NOT NULL
);
