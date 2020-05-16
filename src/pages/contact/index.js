import React, { useState } from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import { firestore, useFirestoreQuery } from "gatsby-theme-firebase";

// import firebase from "gatsby-plugin-firebase";
// import "firebase/database";
// import { useObjectVal } from "react-firebase-hooks/database";
// import { Form, FormState } from "gatsby-theme-firebase";

const Index = (props) => {
  const query = firestore.collection("DogRaces").orderBy("AvgWeight", "asc");
  const [data, isLoading, error] = useFirestoreQuery(query);

  const [isValidated, setIsValidated] = useState(false);

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            {isLoading && "Loading.."}
            {data && JSON.stringify(data)}
            {error && error}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
