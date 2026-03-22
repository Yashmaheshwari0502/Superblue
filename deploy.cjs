const ftp = require("basic-ftp");
const path = require("path");

async function deploy() {
    const client = new ftp.Client();
    client.ftp.verbose = true;
    try {
        console.log("Connecting to FTP server...");
        await client.access({
            host: "147.93.109.248",
            user: "u782984801.superbluecoin",
            password: "Raju@4585",
            secure: false
        });
        
        console.log("Emptying the remote directory if needed, or simply pushing over existing files...");
        // Usually, we can just ensure directory exists and upload from local directory.
        // The basic-ftp uploadFromDir will upload the contents of the local directory to the current remote directory.
        console.log("Uploading dist folder to root public_html...");
        
        await client.uploadFromDir(path.join(__dirname, "dist"), ".");
        
        console.log("Deployed successfully!");
    }
    catch(err) {
        console.log("FTP deploy failed:", err);
    }
    client.close();
}

deploy();
