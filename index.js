import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Server running');
});

const root = {
  friend: () => ({
    id: 1234,
    firstName: 'Lucien',
    lastName: 'ASSANGE',
    gender: 'like to FUCK',
    language: 'Fuck',
    emails: [{ email: 'email@mail.com' }, { email: 'me@me.net' } ],
  }),
};

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`>>>>> Server running on localhost:${PORT}/graphql`);
});

