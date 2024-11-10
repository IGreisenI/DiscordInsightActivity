import { DiscordSDK } from "@discord/embedded-app-sdk";
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const discordSdk = new DiscordSDK(import.meta.env.VITE_DISCORD_CLIENT_ID);

async function setupDiscordSdk(){
    await discordSdk.ready();
}

setupDiscordSdk().then(() => {
    console.log("Discord SDK is authenticated");
});

createApp(App).mount('#app')
