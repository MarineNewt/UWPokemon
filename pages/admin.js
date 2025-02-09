import Head from 'next/head';
import { useState } from "react";
import styles from '../styles/Admin.module.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { Roboto } from 'next/font/google'
const roboto = Roboto({ subsets: ['latin'], weight: '700' })

export default function About() {
  let [userverified, setVerify] = useState(false);
  let [userpassword, setPassword] = useState("");
  let [focus, setFocus] = useState("About");
  let [newHome, setNewHome] = useState("");
  let [dataFull, setDataFull] = useState();
  const [alerts, setAlerts] = useState(false);

  async function Verify(password) {
    const response = await fetch(`/api/verify`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({password}),
    })
    if(response.status === 200){
      const result = await response.json();
      console.log(result.data.Item);
      setDataFull(result.data.Item); //Set Data before verifying to ensure page content loads with variable set.
      return setVerify(true);
    }else{
      setAlerts(true);
      const timeoutId = setTimeout(() => {
        setAlerts(false);
      }, 4000);
    }
  }

  async function UpdateData(type, datas) {
    const response = await fetch(`/api/update`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({type, datas}),
    })
    if(response.status === 200){
      const result = await response.json();
      console.log("Success") //Can consider adding further feedback for success/errors.
    }else{
      const result = await response.json();
      console.log(result);
      console.log("Error");
    }
  }

  return (
    <div className={[styles.container, roboto.className].join(" ")}>
      <Head>
        <title>Pokemon Trainer Club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!userverified && <Dialog
        open={!userverified}
        onClose={()=>{}}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData).entries());
            Verify(formJson.passwordinput)
          },
        }}>
        {alerts && <Alert severity="error" className={styles.alert}>Incorrect Password.</Alert>}
        <DialogTitle id="alert-dialog-title">
          {"Please enter verification password."}
        </DialogTitle>
        <DialogContent>
          <TextField
              style={{marginRight: "150px"}}
              required
              name="passwordinput"
              id="outlined-static"
              type="password"
              label="Password"
              margin="dense"
            />
        </DialogContent>
        <DialogActions>
          <Button type="submit" disabled={alerts}>Submit</Button>
        </DialogActions>
      </Dialog>}

      {userverified && <div id="admin" style={{height: "100dvh"}}>
        <div id="adminnav" className={styles.adminnav}>
          <div onClick={() => {setFocus("About")}} style={{color: focus == "About" ? "rgb(43, 127, 147)" : "white"}}>About</div>
          <div onClick={() => {setFocus("Meetings")}}  style={{color: focus == "Meetings" ? "rgb(43, 127, 147)" : "white"}}>Meetings 6</div>
          <div onClick={() => {setFocus("Events")}}  style={{color: focus == "Events" ? "rgb(43, 127, 147)" : "white"}}>Events 4 </div>
          <div onClick={() => {setFocus("Contacts")}}  style={{color: focus == "Contacts" ? "rgb(43, 127, 147)" : "white"}}>Contacts 2</div>
        </div>

        <div id="focusdisplay" className={styles.focusDisplay}>
          {focus == "About" && <div className={styles.aboutfocus}> 
            <div id="aboutnew" className={styles.aboutfocus_new}>           
              <TextField
              onChange={(e) => {setNewHome(e.target.value)}}
              multiline
              rows={6}
              style={{width: "50%"}}
              required
              name="contentInput"
              id="outlined-static"
              type="text"
              label="New content..."
              margin="dense"
            />
            <button className={styles.aboutfocusbtn} onClick={(e)=>{UpdateData(focus, newHome)}}> Update </button></div>  <div id="aboutcur" className={styles.aboutfocus_cur}> Current content:  <div style={{marginTop: "20px"}}>{dataFull.data_home.S}</div> </div> 
          </div>}
          {focus == "Meetings" && <div> Meetings Tab </div>}
          {focus == "Events" && <div> Events Tab </div>}
          {focus == "Contacts" && <div> Contacts Tab </div>}
        </div>
      </div>}

    </div>
  );
}
