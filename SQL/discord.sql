CREATE TABLE crypto (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    symbol VARCHAR(10) NOT NULL
);

INSERT INTO crypto (name, symbol) VALUES 
    ("Bitcoin", "BTC"),
    ("Ethereum", "ETH"),
    ("Tether", "USDT"),
    ("BNB", "BNB"),
    ("USD Coin", "USDC"),
    ("XRP", "XRP"),
    ("Cardano", "ADA"),
    ("Lido Staked Ether", "STETH"),
    ("Dogecoin", "DOGE"),
    ("Polygon", "MATIC");