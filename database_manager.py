from sqlalchemy import create_engine, insert, schema, Table, select, text
import sqlite3
from create_database import users_data
import datetime


class DatabaseManager:
    global engine
    engine = create_engine(f'sqlite+pysqlite:///users_data.sqlite3', echo=False)
    # conn = sqlite3.connect('Account_Management/users_data.sqlite3')

    def register(self, email, nick, password):
        with engine.connect() as conn:
            stmt = (
                insert(users_data).
                values(email=email, nick=nick, password=password, register_date=datetime.datetime.now())
            )
            conn.execute(stmt)

    def login(self, user, password):
        with engine.connect() as conn:
            stmt = (f"""
            SELECT password
            FROM users_data
            WHERE nick="{user}"
            """)
            if conn.execute(text(f"{stmt}")).fetchall()[0][0]==password:
                return True
            else:
                return False