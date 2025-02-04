import Head from 'next/head';
import { useState } from "react";
import styles from '../styles/Home.module.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

export default function About() {
  let [userverified, setVerify] = useState(false);
  let [userpassword, setPassword] = useState("");
  const [alerts, setAlerts] = useState(false);

  async function Verify(password) {
    const response = await fetch(`/api/verify`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({password}),
    })
    if(response.status === 200){
      return setVerify(true);
    }else{
      setAlerts(true);
      const timeoutId = setTimeout(() => {
        setAlerts(false);
      }, 4000);
    }
  }

  return (
    <div className={[styles.container].join(" ")}>
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
      
      <div id="admin" className={styles.pagealt}>


      </div>

    </div>
  );
}
