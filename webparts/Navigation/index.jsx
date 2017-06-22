import { render } from 'react-dom';
import MenuList from '../../components/NavigationCom/navbarMenu.jsx';
import MenuItem from '../../components/NavigationCom/navbarItem.jsx';
import MenuItemTile from '../../components/NavigationCom/navbarItemTile.jsx';
import $ from 'jquery';

function NavigationRender(config) {
    let param = {};
    let data = [
        {
            Title: "Home", ItemHref: "", Items: [], hasChild: false, hasGrandChild: false,
        },
        {
            Title: "Division", ItemHref: "", hasChild: true, hasGrandChild: true,
            Items: [
                {
                    Title: "Care Integration Division", ItemHref: "",
                    Items: [
                        { Title: "Assessment & Co-ordination Services Devt", ItemHref: "" },
                        { Title: "Care Innovations & Integration Devt", ItemHref: "" },
                        { Title: "Palliative Care Services Development", ItemHref: "" }
                    ]
                },
                {
                    Title: "Care Transition Division", ItemHref: "",
                    Items: [
                        { Title: "ACTION & Ops Support", ItemHref: "" },
                        { Title: "Care Transition Office", ItemHref: "" },
                        { Title: "CCMS & Comm CAT", ItemHref: "" },
                        { Title: "Helpdesk Infosystem and Projects (HIP)", ItemHref: "" },
                        { Title: "Referral Management Teams", ItemHref: "" }
                    ]
                },
                {
                    Title: "CEO Office", ItemHref: "", Items: []
                },
                {
                    Title: "Community Mental Health Division", ItemHref: "",
                    Items: [
                        { Title: "Capability Building & Sector Development", ItemHref: "" },
                        { Title: "Community Engagement & Development", ItemHref: "" },
                        { Title: "Community Support", ItemHref: "" },
                        { Title: "Resource Planning", ItemHref: "" },
                        { Title: "Service Implementation & Development", ItemHref: "" }
                    ]
                },
                {
                    Title: "Corporate Services & Strategy Division", ItemHref: "",
                    Items: [
                        { Title: "Corporate & Marketing Comm", ItemHref: "" },
                        { Title: "Corporate Development", ItemHref: "" },
                        { Title: "Finance", ItemHref: "" },
                        { Title: "Human Resource", ItemHref: "" },
                        { Title: "Office Administration", ItemHref: "" }
                    ]
                },
                {
                    Title: "Grants Management Office", ItemHref: "",
                    Items: [
                        { Title: "Grant Policy & Management", ItemHref: "" },
                        { Title: "Resource Management", ItemHref: "" }
                    ]
                },
                {
                    Title: "Home & Primary Care Division", ItemHref: "",
                    Items: [
                        { Title: "Home & Community Care", ItemHref: "" },
                        { Title: "Primary Care Development", ItemHref: "" }
                    ]
                },
                {
                    Title: "ILTC IT Enablement Office", ItemHref: "",
                    Items: [
                        { Title: "ILTC IT Development", ItemHref: "" }
                    ]
                }
            ]
        },
        {
            Title: "APPLICATION", ItemHref: "", hasChild: true, hasGrandChild: false,
            Items: [
                { Title: "FAQ", ItemHref: "" },
                { Title: "AIC library", ItemHref: "" },
                { Title: "PRM Conversations", ItemHref: "" },
                { Title: "iHR", ItemHref: "" },
                { Title: "LMS", ItemHref: "" },
                { Title: "PRM", ItemHref: "" },
                { Title: "Integrated Referral Management System (IRMS)", ItemHref: "" },
                { Title: "eForms", ItemHref: "" },
                { Title: "I-innovate", ItemHref: "" },
                { Title: "Webmail", ItemHref: "" },
                { Title: "Grants Management System (GMS)", ItemHref: "" },
                { Title: "Budget and Reporting System (BARS)", ItemHref: "" }
            ]
        },
        {
            Title: "CROSS-DIVISIONS", ItemHref: "", hasChild: false, hasGrandChild: false, Items: []
        }
        ,
        {
            Title: "ABOUT AIC", ItemHref: "", hasChild: true, hasGrandChild: false,
            Items: [
                { Title: "Org Structure", ItemHref: "" },
                { Title: "Staff Directory", ItemHref: "" },
                { Title: "Policies", ItemHref: "" },
                { Title: "SMM", ItemHref: "" }
            ]
        }
    ];

    function renderUI(data) {
        var minWidth = data.length * 130;
        var elementDiv = document.getElementById('navigation')
        if (elementDiv) {
            elementDiv.style.minWidth = minWidth + 'px';
            render(
                <MenuList data={data} menuStyle={0}>
                    <MenuItemTile>
                    </MenuItemTile>
                </MenuList>,
                document.getElementById('navigation')
            );
        }
    }

    function loadData() {
        $.ajax({
            cache: false,
            type: "GET",
            url: config.url,
            headers: { "accept": "application/json;odata=verbose" },
            async: false,
            success: function (data) {
                renderUI(data);
            },
            error: function (data) {

            }
        });
    }

   
    renderUI(data);

}

global.NavigationRender = NavigationRender;

