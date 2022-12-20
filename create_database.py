from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, engine, DateTime, create_engine

Base = declarative_base()
engine = create_engine(f'sqlite+pysqlite:///users_data.sqlite3', echo=False)

class users_data(Base):
    __tablename__ = 'users_data'

    user_id = Column(Integer, primary_key=True, autoincrement=True)
    email = Column(String)
    nick = Column(String)
    password = Column(String)
    register_date = Column(DateTime)


Base.metadata.create_all(engine)