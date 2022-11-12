import "./styles.css";
import React, { useEffect, useState } from "react";
import { Header, Footer, List, VideoList } from "./components";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  updateDoc,
  getDocs,
  query,
  where
} from "firebase/firestore";
import { db } from "./firebase/firebase-config";

const App = () => {
  const [entries, setEntries] = useState<any>(null);
  const docsRef = collection(db, "allRecords");

  const getAllEntries = async () => {
    const data = await getDocs(docsRef);
    const entries = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    console.log("data---", entries);
    setEntries(entries);
  };

  useEffect(() => {
    getAllEntries();
  }, []);

  const addRecord = async () => {
    console.log("allRecords");
    try {
      const docRef = await addDoc(collection(db, "allRecords"), {
        name: "Top100",
        description: "Long description",
        banner:
          "https://web.archive.org/web/20010805101922im_/http://sppvip.go.ro/banner.gif",
        web: "https://www.hot100.ro"
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const updateGame = async () => {
    const updateGameCollection = doc(db, "games/w");

    await updateDoc(updateGameCollection, {
      capital: true,
      gesg: "00"
    });
  };

  React.useEffect(() => {
    console.log("asculta");
    // const unsub = onSnapshot(doc(db, "allRecords", "allRecords"), (doc) => {
    //   console.log("Current data: ", doc.data());
    // });

    const q = query(
      collection(db, "allRecords"),
      where("name", "==", "Top100")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const records: [] = [];
      querySnapshot.forEach((doc) => {
        records.push(doc.data());
      });
      console.log("Current cities in CA: ", records.join(", "));
      setEntries(records);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <Header />
      {/* <VideoList /> */}
      <List list={entries} />
      <Footer />
      <div onClick={addRecord}>add</div>
      <div onClick={updateGame}>updateGame</div>
    </div>
  );
};

export default App;
