"use strict";

const apps_list = [
    {
        title: "Arbor",
        icon: "static/icons/arbor@128.png",
        url: "https://demeter-house.uk.arbor.sc/",
        description: "View your Arbor dashboard."
    },
    {
        title: "ClassDojo",
        icon: "static/icons/dojo@128.png",
        url: "https://teach.classdojo.com/#/login?redirect=%2Flaunchpad",
        description: "Award students points and communicate with parents."
    },
    {
        title: "Slack",
        icon: "static/icons/slack@128.png",
        url: "https://demeterhouse.slack.com/",
        fallback: "https://demeterhouse.slack.com/",
        description: "Communicate with other staff in real-time."
    },
    {
        title: "My Concern",
        icon: "static/icons/myconcern@128.png",
        url: "https://myconcern.education/",
        description: "Log any concerns you have."
    },
    {
        title: "Emails",
        icon: "static/icons/outlook@128.png",
        url: "https://remote.demeterhouseschool.com/owa",
        description: "View your emails."
    },
    {
        title: "Realsmart Login",
        icon: "static/icons/realsmart@128.png",
        url: "https://smartlogin.realsmart.co.uk/smartlogin/login?school=3822",
        description: "Login to the school website and connect to other apps."
    },
    {
        title: "PCSCUK Support",
        icon: "static/icons/itsupport@128.png",
        url: "mailto:support@pcscuk.com",
        description: "Contact PC Support for technical help."
    },
    {
        title: "Google Drive",
        icon: "static/icons/gdrive@128.png",
        url: "https://drive.google.com/a/demeterhouseschool.com",
        description: "Access shared documents."
    },/*
    {
        title: "SIMS",
        icon: "static/icons/sims@128.png",
        url: "https://sts.sims.co.uk/login",
        description: "Access Hosted SIMS."
    },*/
    {
        title: "School Website",
        icon: "static/icons/demeterleaf@128.png",
        url: "https://demeterhouseschool.com",
        description: "Visit the school website."
    }
];

const useful_list = [
    {
        title: "Youtube",
        icon: "static/icons/youtube@64.png",
        action: "https://youtube.com",
        colour: "ff0000"
    },
    {
        title: "Twinkl",
        icon: "static/icons/twinkl@64.png",
        action: "https://www.twinkl.com/",
        colour: "00adf3"
    },
    {
        title: "Codecademy",
        icon: "static/icons/codecademy@64.png",
        action: "https://codecademy.com/",
        colour: "141c3a"
    },
    /*{
        title: "Duolingo",
        icon: "static/icons/duolingo@64.png",
        action: "https://www.duolingo.com/",
        colour: "78c800"
    },*/
    {
        title: "Mathletics",
        icon: "static/icons/mathletics@64.png",
        action: "https://login.mathletics.com/",
        colour: "06a9e4"
    },
    {
        title: "Khan Academy",
        icon: "static/icons/khanacademy@64.png",
        action: "https://www.khanacademy.org/",
        colour: "14bf96"
    }
];

const documents_list =[
    { title: "Referral Forms", url: "https://docs.google.com/document/d/1u4NJRFwn9FbIM60qNZXwxvWBl1cnFxVTRiNe15WZy2s/edit?usp=sharing" },
    { title: "Upper/Lower Class List", url: "https://docs.google.com/spreadsheets/d/1goWM_IV3sdAIe8zIJrRNizIfyCuF3HCI2rRvPnfnS_A/edit?usp=sharing" },
    { title: "COVID Guidance", url: "https://docs.google.com/document/d/15VdCHb2WZYemhtjJ_3LfscqBJ3DjhbQZ4sviGKRXhfE/edit"},
    { title: "Current Students folder", url: "https://drive.google.com/drive/u/1/folders/0AArHNcL2r-9iUk9PVA"}
];

document.addEventListener('DOMContentLoaded', function(){
    // apps
    const apps = document.querySelector("#apps .container");
    for(let i = 0; i < apps_list.length; ++i){
        const item = apps_list[i];

        const html = `
            <a href="${item.url}" target="_blank" class="app-item">
                <div class="icon" style="background-image:url('${item.icon}')">
                </div>
                <div class='title'>${item.title}</div>
                <div class='description'>${item.description}</div>
            </a>
        `;
        apps.innerHTML += html;
    }

    // documents
    const documents = document.querySelector("#documents .container");
    for(let i = 0; i < documents_list.length; ++i){
        const item = documents_list[i];
        const html = `
            <li class="document">
                <a href="${item.url}" target="_blank">${item.title}</a>
            </li>
        `
        documents.innerHTML += html;
    }

    // useful links
    const useful = document.querySelector("#useful-links .container");
    for(let i = 0; i < useful_list.length; ++i){
        const item = useful_list[i];

        const html = `
        <a href='${item.action}' class='useful-link' target="_blank">
            <div class='icon' style="background-image:url('${item.icon}'); border-color:#${item.colour}">
            </div>
            <div class='title'>${item.title}</div>
        </a>`;

        useful.innerHTML += html;
    }
});