import sqlalchemy
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, aliased

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'

    id = sqlalchemy.Column(sqlalchemy.Integer, primary_key = True)
    name = sqlalchemy.Column(sqlalchemy.String)
    fullname = sqlalchemy.Column(sqlalchemy.String)
    nickname = sqlalchemy.Column(sqlalchemy.String)

    def __repr__(self):
        return "<User(name='{}', fullname='{}', nickname='{}')>".format(self.name,
                                                                        self.fullname,
                                                                        self.nickname)


def main():
    print('sqlalchemy version: {}'.format(sqlalchemy.__version__))

    engine = sqlalchemy.create_engine('sqlite:///:memory:', echo=True)

    print(User.__table__)

    print(Base.metadata.create_all(engine))

    

    ed_user = User(name='ed', fullname='Ed Jones', nickname='edsnickname')
    print(ed_user.name)
    print(ed_user.nickname)
    print(ed_user.id)

    # Creating a Session
    
    Session = sessionmaker(bind=engine)
    session = Session()

    # Adding and Updating Objects
    
    session.add(ed_user)

    our_user = session.query(User).filter_by(name='ed').first()
    print(our_user)

    print(ed_user is our_user)

    session.add_all([
        User(name='wendy', fullname='Wendy Williams', nickname='windy'),
        User(name='mary', fullname='Mary Contrary', nickname='mary'),
        User(name='fred', fullname='Fred Flintstone', nickname='freddy')])

    ed_user.nickname = 'eddie'

    print(session.dirty)
    print(session.new)
    session.commit()

    print(ed_user.id)

    # Rolling Back


    ed_user.name = 'Edwardo'

    fake_user = User(name='fakeuser', fullname='Invalid', nickname='12345')
    session.add(fake_user)
    print(session.query(User).filter(User.name.in_(['Edwardo', 'fakeuser'])).all())
    session.rollback()
    print(ed_user.name);
    print(session.query(User).filter(User.name.in_(['ed', 'fakeuser'])).all())

    # Querying

    for instance in session.query(User).order_by(User.id):
        print(instance.name, instance.fullname)

    for name, fullname in session.query(User.name, User.fullname):
        print(name, fullname)

    for row in session.query(User, User.name).all():
        print(row.User, row.name)

    for row in session.query(User.name.label('name_label')).all():
        print(row.name_label)

    user_alias = aliased(User, name='user_alias')
    for row in session.query(user_alias, user_alias.name).all():
        print(row.user_alias)

    for u in session.query(User).order_by(User.id)[1:3]:
        print(u)

    for name, in session.query(User.name).filter_by(fullname='Ed Jones'):
        print(name)

    for name, in session.query(User.name).filter(User.fullname=='Ed Jones'):
        print(name)

    for user in session.query(User).filter(User.name=='ed').filter(User.fullname=='Ed Jones'):
        print(user)

    # Counting

    print(session.query(User).filter(User.name.like('%ed')).count())

    
if __name__ == '__main__':
    main()
    
