export default (req, res) => {
    const css =  `

    body {
      margin: 0;
      padding: 0;
      font-size: 13px;
      font-family: "Roboto", sans-serif;
    }
    
    option,
    .form-control,
    .btn,
    select {
      font-family: "Roboto", sans-serif;
    }
    
    body h1,
    body h2,
    body h3,
    body h4,
    body h5,
    body h6 {
      margin: 0;
      padding: 0;
      font-weight: 500;
    }
    
    .h1,
    .h2,
    .h3,
    .h4,
    .h5,
    .h6,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 0;
      margin-bottom: .5rem;
      font-weight: 500;
      line-height: 1.2
    }
    
    .h1,
    h1 {
      font-size: calc(1.375rem + 1.5vw)
    }
    
    @media (min-width:1200px) {
    
      .h1,
      h1 {
        font-size: 2.5rem
      }
    }
    
    .h2,
    h2 {
      font-size: calc(1.325rem + .9vw)
    }
    
    @media (min-width:1200px) {
    
      .h2,
      h2 {
        font-size: 2rem
      }
    }
    
    .h3,
    h3 {
      font-size: calc(1.3rem + .6vw)
    }
    
    @media (min-width:1200px) {
    
      .h3,
      h3 {
        font-size: 1.75rem
      }
    }
    
    .h4,
    h4 {
      font-size: calc(1.275rem + .3vw)
    }
    
    @media (min-width:1200px) {
    
      .h4,
      h4 {
        font-size: 1.5rem
      }
    }
    
    .h5,
    h5 {
      font-size: 1.25rem
    }
    
    .h6,
    h6 {
      font-size: 1rem
    }
    
    body div,
    body dl,
    body dt,
    body dd,
    body ul,
    body ol,
    body li,
    body h1,
    body h2,
    body h3,
    body h4,
    body h5,
    body h6,
    body pre,
    body form,
    body fieldset,
    body input,
    body textarea,
    body p,
    body blockquote,
    body th,
    body td {
      padding: 0;
      margin: 0;
    }
    
    .hide {
      display: none !important;
    }
    
    .show {
      display: block !important;
    }
    
    
    #dialerAppHtml .row>* {
      flex-shrink: 0;
      width: 100%;
      max-width: 100%;
      padding-right: calc(var(--bs-gutter-x)* .5);
      padding-left: calc(var(--bs-gutter-x)* .5);
      margin-top: var(--bs-gutter-y);
    }
    
    #dialerAppHtml ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
    
    #dialerAppHtml .vrm-subheader {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      padding: 10px;
      z-index: 1;
      background: #f6f6f6;
      border-radius: 10px;
      margin-top: 5px;
    }
    
    #dialerAppHtml .vrm-subheader .leftSide {
      display: inline-flex;
    }
    
    #dialerAppHtml .vrm-subheader .rightSide ul.ulgroup li.schedule-call>ul li .card .card-body p,
    #dialerAppHtml .vrm-subheader .rightSide ul.ulgroup li.schedule-call>ul li .card .card-body small {
      line-height: 17px;
      margin: 0;
    }
    
    #dialerAppHtml .vrm-subheader .rightSide ul.ulgroup li.schedule-call>ul li .card .card-body p {
      color: #212529;
    }
    
    
    #dialerAppHtml .vrm-subheader .leftSide select.form-control {
      margin-right: 10px;
      padding-right: 15px;
      font-size: 13px;
      -webkit-appearance: auto;
      display: block;
      width: 100%;
      padding: 0.375rem 0.75rem;
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      background-image: none;
      font-family: "Roboto", sans-serif !important;
    }
    
    #dialerAppHtml .vrm-subheader .btn {
      display: inline-block;
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      text-align: center;
      text-decoration: none;
      vertical-align: middle;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      background-color: transparent;
      border: 1px solid transparent;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      border-radius: 0.25rem;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
        box-shadow 0.15s ease-in-out;
      white-space: nowrap;
      font-family: "Roboto", sans-serif !important;
    }
    
    #dialerAppHtml .vrm-subheader .leftSide .btn.btn-primary {
      background: var(--Primary-25, #ddebff);
      border-color: #0065ff;
      color: #0065ff;
      font-size: 13px;
      font-weight: 500;
    }
    
    #dialerAppHtml .vrm-subheader .leftSide .btn.btn-primary:hover,
    #dialerAppHtml .vrm-subheader .leftSide .btn.btn-primary:focus {
      background: #0065ff;
      color: #fff;
    }
    
    #dialerAppHtml .vrm-subheader .rightSide ul.ulgroup {
      display: inline-flex;
      align-items: center;
    }
    
    #dialerAppHtml .vrm-subheader .rightSide ul.ulgroup li {
      margin-left: 10px;
      position: relative;
      line-height: normal;
    }
    
    #dialerAppHtml .vrm-subheader .rightSide ul.ulgroup li.on-call .btn.btn-danger {
      border-radius: 8px;
      border: 1px solid #ff0000;
      background: #ffeaeab2;
      color: #505050;
      font-size: 12px;
      font-weight: 600;
      text-align: left;
      position: relative;
      /* padding-left: 20px; */
    }
    
    /* #dialerAppHtml .vrm-subheader .rightSide ul.ulgroup li.on-call .btn.btn-danger::before {
      content: "";
      width: 8px;
      height: 8px;
      background: #ff0000;
      position: absolute;
      border-radius: 100px;
      top: 10px;
      left: 8px;
    } */
    
    #dialerAppHtml .vrm-subheader .rightSide ul.ulgroup li.on-call .btn.btn-success {
      border-radius: 8px;
      border: 1px solid #00ff00;
      background: #e1ffe1;
      color: #505050;
      font-size: 12px;
      font-weight: 600;
      text-align: left;
      position: relative;
      /* padding-left: 20px; */
    }
    
    /* #dialerAppHtml .vrm-subheader .rightSide ul.ulgroup li.on-call .btn.btn-success::before {
      content: "";
      width: 8px;
      height: 8px;
      background: #00ff00;
      position: absolute;
      border-radius: 100px;
      top: 10px;
      left: 8px;
    } */
    
    #dialerAppHtml .vrm-subheader .rightSide ul.ulgroup li.on-call .btn.btn-success small {
      display: block;
      font-weight: normal;
      /* color: #787878; */
      font-size: 13px;
      color: #000;
    }
    
    #dialerAppHtml .vrm-subheader .rightSide ul.ulgroup li.on-call .btn.btn-danger small {
      display: block;
      font-weight: normal;
      font-size: 13px;
      /* color: #787878; */
      color: #000;
    }
    
    #dialerAppHtml .vrm-subheader .rightSide ul.ulgroup li.on-call .btn.btn-danger.dropdown-toggle::after {
      display: none;
    }
    
    #dialerAppHtml .vrm-subheader .rightSide ul.ulgroup li.on-call div.dropdown-menu {
      padding: 10px;
      width: 180px;
      position: absolute;
      z-index: 1000;
      margin: 0;
      font-size: 1rem;
      color: #212529;
      text-align: left;
      list-style: none;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 0.25rem;
    }
    
    #dialerAppHtml .vrm-subheader .rightSide ul.ulgroup li.on-call div.dropdown-menu.show {
      display: block;
    }
    
    #dialerAppHtml .vrm-subheader .rightSide ul.ulgroup li.on-call div.dropdown-menu>p {
      font-size: 13px;
      display: inline-flex;
      justify-content: space-between;
      width: 100%;
      border-bottom: 1px solid #f6f6f6;
      padding-bottom: 7px;
      margin-bottom: 7px;
      margin-left: 0;
    }
    
    #dialerAppHtml .vrm-subheader .rightSide ul.ulgroup li.on-call div.dropdown-menu>p:last-child {
      margin-bottom: 0;
      border-bottom: none;
    }
    
    #dialerAppHtml .vrm-subheader .rightSide ul.ulgroup li.on-call div.dropdown-menu>p span {
      color: #000;
      font-weight: 600;
    }
    
    #dialerAppHtml .vrm-subheader .rightSide ul.ulgroup li .circleicon {
      border-radius: 50%;
      padding: 0;
      text-align: center;
      width: 40px;
      height: 40px;
      line-height: 40px;
      border: 1px solid #d0d0d0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    
    #dialerAppHtml .vrm-subheader .rightSide ul.ulgroup li .circleicon img {
      width: 20px;
    }
    
    #dialerAppHtml .vrm-subheader .rightSide ul.ulgroup li .circleicon:hover,
    #dialerAppHtml .vrm-subheader .rightSide ul.ulgroup li .circleicon:focus {
      background: #f9f9f9;
    }
    
    #dialerAppHtml .vrm-subheader .rightSide ul.ulgroup li.schedule-call {
      font-size: 12px;
    }
    
    #dialerAppHtml .vrm-subheader .rightSide ul.ulgroup li.schedule-call>ul {
      display: inline-flex;
      align-items: center;
    }
    
    #dialerAppHtml .vrm-subheader .rightSide ul.ulgroup li.schedule-call>ul li:first-child {
      margin-left: 0;
    }
    
    #dialerAppHtml .vrm-subheader .rightSide ul.ulgroup li.schedule-call>ul li .card {
      border-radius: 8px;
      border: none;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
      position: relative;
      display: flex;
      flex-direction: column;
      min-width: 0;
      word-wrap: break-word;
      background-color: #fff;
      background-clip: border-box;
    }
    
    #dialerAppHtml .vrm-subheader .rightSide ul.ulgroup li.schedule-call>ul li .card .card-body {
      font-weight: 600;
      font-size: 12px;
      padding: 0.375rem 0.75rem;
      flex: 1 1 auto;
    }
    
    #dialerAppHtml .vrm-subheader .rightSide ul.ulgroup li.schedule-call>ul li .card .card-body small {
      display: block;
      font-weight: normal;
      color: #787878;
      white-space: nowrap;
    }
    
    #dialerAppHtml .vrm-subheader .rightSide ul.ulgroup li.schedule-call>ul li .card .card-body small img {
      position: relative;
      top: 1px;
      display: none;
    }
    
    #dialerAppHtml .hidden {
      display: none !important;
    }
    
    
    #dialerAppHtml .btn {
      display: inline-block;
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      text-align: center;
      text-decoration: none;
      vertical-align: middle;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      background-color: transparent;
      border: 1px solid transparent;
      padding: .375rem .75rem;
      font-size: 1rem;
      border-radius: .25rem;
      transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
      font-family: "Roboto", sans-serif !important;
    }
    
    #dialerAppHtml .btn:focus {
      outline: 0;
      box-shadow: none;
    }
    
    #dialerAppHtml .btn-primary {
      color: #fff;
      background-color: #0d6efd;
      border-color: #0d6efd;
      font-family: "Roboto", sans-serif !important;
    }
    
    .btn.btn-primary.total-call {
      border: 1px solid #5d9dff !important;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
      border-radius: 8px !important;
      padding: 10px 15px !important;
      background-color: #fff !important;
    }
    
    .btn.btn-primary.total-call:hover {
      color: #0065ff !important;
    }
    
    #dialerAppHtml .btn-primary:hover,
    #dialerAppHtml .btn-primary:focus {
      color: #fff;
      background-color: #0b5ed7;
      border-color: #0a58ca
    }
    
    #dialerAppHtml .btn-secondary {
      color: #fff;
      background-color: #6c757d;
      border-color: #6c757d;
    }
    
    #dialerAppHtml .btn-secondary:hover,
    #dialerAppHtml .btn-secondary:focus {
      color: #fff;
      background-color: #5c636a;
      border-color: #565e64
    }
    
    #dialerAppHtml .btn-outline-primary {
      color: #0d6efd;
      border-color: #0d6efd;
      font-family: "Roboto", sans-serif !important;
    }
    
    #dialerAppHtml .btn-outline-primary:hover,
    #dialerAppHtml .btn-outline-primary:focus {
      color: #fff;
      background-color: #0d6efd;
      border-color: #0d6efd
    }
    
    
    .modal-open {
      height: auto;
      min-height: 100%;
      overflow: hidden;
      padding-right: 17px;
    }
    
    #dialerAppHtml .list-group {
      display: flex;
      flex-direction: column;
      padding-left: 0;
      margin-bottom: 0;
      border-radius: .25rem
    }
    
    
    #dialerAppHtml .list-group-item-action {
      width: 100%;
      color: #495057;
      text-align: inherit
    }
    
    #dialerAppHtml .list-group-item {
      position: relative;
      display: block;
      padding: 1rem;
      color: #212529;
      text-decoration: none;
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, .125)
    }
    
    #dialerAppHtml .list-group-item:first-child {
      border-top-left-radius: inherit;
      border-top-right-radius: inherit
    }
    
    #dialerAppHtml .list-group-item:last-child {
      border-bottom-right-radius: inherit;
      border-bottom-left-radius: inherit
    }
    
    #dialerAppHtml .row {
      --bs-gutter-x: 1.5rem;
      --bs-gutter-y: 0;
      display: flex;
      flex-wrap: wrap;
      margin-top: calc(-1 * var(--bs-gutter-y));
      margin-right: calc(-.5 * var(--bs-gutter-x));
      margin-left: calc(-.5 * var(--bs-gutter-x))
    }
    
    #dialerAppHtml .col-md-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }
    
    
    /* Modal CSS */
    #dialerAppHtml .fade {
      transition: opacity .15s linear;
    }
    
    #dialerAppHtml #callingdispositionsModal,
    #modal-poscrm-break {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1100;
      width: 100%;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      outline: 0;
      transition: opacity .15s linear;
    }
    
    #dialerAppHtml .modal-dialog {
      position: relative;
      width: auto;
      margin: .5rem;
      pointer-events: none
    }
    
    
    
    #dialerAppHtml .modal-content {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      pointer-events: auto;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid rgba(0, 0, 0, .2);
      border-radius: 1rem;
      outline: 0;
      /* box-shadow: 0 3px 10px #00000082; */
    }
    
    #dialerAppHtml .modal-header {
      display: flex;
      flex-shrink: 0;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 1rem;
      border-bottom: 1px solid #dee2e6;
      border-top-left-radius: calc(.3rem - 1px);
      border-top-right-radius: calc(.3rem - 1px)
    }
    
    #dialerAppHtml .modal-header .btn-close {
      padding: .5rem .5rem;
      margin: -.5rem .5rem -.5rem auto
    }
    
    #dialerAppHtml .btn-close {
      box-sizing: content-box;
      width: 1em;
      height: 1em;
      padding: .25em .25em;
      color: #000;
      background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;
      border: 0;
      border-radius: .25rem;
      opacity: .5;
      cursor: pointer;
    }
    
    #dialerAppHtml .btn-close:hover {
      color: #000;
      text-decoration: none;
      opacity: .75
    }
    
    #dialerAppHtml .btn-close:focus {
      outline: 0;
      box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .25);
      opacity: 1
    }
    
    #dialerAppHtml .modal-title {
      margin-bottom: 0;
      line-height: 1.5
    }
    
    #dialerAppHtml .modal-body {
      position: relative;
      flex: 1 1 auto;
      padding: 0 1rem 1rem 1rem
    }
    
    #dialerAppHtml .modal-footer {
      display: flex;
      flex-wrap: wrap;
      flex-shrink: 0;
      align-items: center;
      justify-content: flex-end;
      padding: .75rem;
      border-top: 1px solid #dee2e6;
      border-bottom-right-radius: calc(.3rem - 1px);
      border-bottom-left-radius: calc(.3rem - 1px)
    }
    
    #dialerAppHtml .modal-footer>* {
      margin: .25rem
    }
    
    @media (min-width:576px) {
      #dialerAppHtml .modal-dialog {
        max-width: 500px;
        margin: 1.75rem auto
      }
    }
    
    #dialerAppHtml .modal-dialog .btn {
      font-size: 13px;
    }
    
    
    
    #dialerAppHtml .hide#callingdispositionsModal .modal-dialog {
      /* transition: transform .3s ease-out; */
      /* transform: translate(0, -50px) */
    }
    
    
    #dialerAppHtml #callingdispositionsModal .modal-dialog {
      max-width: 472px;
      width: 96%;
      margin: 25px auto;
      transition: transform .3s ease-out;
      /* transform: translate(0, -50px) */
    }
    
    #dialerAppHtml #callingdispositionsModal .modal-dialog.show {
      transform: none
    }
    
    #dialerAppHtml #callingdispositionsModal .modal-dialog .modal-content .modal-header {
      border-bottom: 0;
      background: #f0f6ff;
      padding: 10px 15px;
      border-radius: 1rem 1rem 0 0;
    }
    
    #dialerAppHtml #callingdispositionsModal .modal-dialog .modal-content .modal-header h5.modal-title {
      font-size: 17px;
      display: inline-flex;
      align-items: center;
    }
    
    #dialerAppHtml #callingdispositionsModal .modal-dialog .modal-content .modal-header h5.modal-title span.icon-dis {
      margin-right: 10px;
      width: 52px;
    }
    
    #dialerAppHtml #callingdispositionsModal .modal-dialog .modal-content .modal-header h5.modal-title span.icon-dis img {
      width: 100%;
    }
    
    #dialerAppHtml #callingdispositionsModal .modal-dialog .modal-content .modal-body .disposition-success-message.text-success {
      margin: 10px 0;
    }
    
    #dialerAppHtml #callingdispositionsModal .modal-dialog .modal-content .modal-body .dis_details {
      background: #f3f3f3;
      padding: 12px 16px 0px 16px;
      border-radius: 0;
      color: #000;
      font-size: 13px;
      margin: -16px;
      margin-bottom: 15px;
      padding-right: 50px;
      position: relative;
      margin-top: 0;
    }
    
    #dialerAppHtml #callingdispositionsModal .modal-dialog .modal-content .modal-body .dis_details .row .col-md-12 {
      flex: 0 0 auto;
      width: 100%;
    }
    
    #dialerAppHtml #callingdispositionsModal .modal-dialog .modal-content .modal-body .dis_details .form-group {
      margin-bottom: 10px;
    }
    
    #dialerAppHtml #callingdispositionsModal .modal-dialog .modal-content .modal-body .dis_details .form-group .lblText {
      text-transform: capitalize;
      font-size: 11px;
      display: block;
      margin: 0;
    }
    
    #dialerAppHtml #callingdispositionsModal .modal-dialog .modal-content .modal-body .dis_details .toggleicon {
      position: absolute;
      right: 25px;
      top: 12px;
      cursor: pointer;
    }
    
    #dialerAppHtml #callingdispositionsModal .modal-dialog .modal-content .modal-body .form-group {
      color: #707070;
      font-size: 11px;
      margin-bottom: 15px;
    }
    
    #dialerAppHtml #callingdispositionsModal .modal-dialog .modal-content .modal-body .form-group .lblText {
      color: #000;
      font-size: 13px;
      font-weight: 500;
      display: block;
      margin-bottom: 5px;
    }
    
    #dialerAppHtml #callingdispositionsModal .modal-dialog .modal-content .modal-body .form-group:last-child {
      margin-bottom: 0;
    }
    
    
    @media (max-width:600px) {
      #dialerAppHtml .col-md-4.form-group {
        width: 50%;
      }
    }
    
    @media (max-width:400px) {
      #dialerAppHtml .col-md-4.form-group {
        width: 100%;
      }
    }
    
    #dialerAppHtml #callingdispositionsModal .modal-dialog .modal-content .modal-footer {
      justify-content: space-between;
    }
    
    #dialerAppHtml #callingdispositionsModal .modal-dialog .modal-content .modal-footer {
      border-top: 0;
      padding-top: 0;
      justify-content: space-between;
    }
    
    .modal-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1032;
      width: 100vw;
      height: 100vh;
      background-color: #000
    }
    
    .modal-backdrop.fade {
      opacity: 0
    }
    
    .modal-backdrop.show {
      opacity: .5
    }
    
    .error {
      color: red;
    }
    
    
    
    .offcanvas-backdrop-dialer {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1101;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, .5);
    }
    
    .offcanvas-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1101;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, .5);
    }
    
    .swal2-container {
      z-index: 1000000;
    }
    
    .offcanvas-backdrop.fade {
      opacity: 0
    }
    
    .offcanvas-backdrop.show {
      opacity: .5
    }
    
    .offcanvas-backdrop-dialer.fade {
      opacity: 0
    }
    
    .offcanvas-backdrop-dialer.show {
      opacity: .5
    }
    
    .offcanvas-header {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      padding: 1rem 1rem
    }
    
    .offcanvas-header .btn-close {
      padding: .5rem .5rem;
      margin-top: -.5rem;
      margin-right: -.5rem;
      margin-bottom: -.5rem
    }
    
    .offcanvas-title {
      margin-bottom: 0;
      line-height: 1.5
    }
    
    .offcanvas-body {
      flex-grow: 1;
      padding: 1rem 1rem;
      overflow-y: auto
    }
    
    .offcanvas-start {
      top: 0;
      left: 0;
      width: 400px;
      border-right: 1px solid rgba(0, 0, 0, .2);
      transform: translateX(-100%)
    }
    
    /* .offcanvas-end {
      top: 0;
      right: 0;
      width: 400px;
      border-left: 1px solid rgba(0, 0, 0, .2);
      transform: translateX(100%)
    } */
    
    .offcanvas-top {
      top: 0;
      right: 0;
      left: 0;
      height: 30vh;
      max-height: 100%;
      border-bottom: 1px solid rgba(0, 0, 0, .2);
      transform: translateY(-100%)
    }
    
    .offcanvas-bottom {
      right: 0;
      left: 0;
      height: 30vh;
      max-height: 100%;
      border-top: 1px solid rgba(0, 0, 0, .2);
      transform: translateY(100%)
    }
    
    .offcanvas.show {
      transform: none
    }
    
    
    
    .mb-3 {
      margin-bottom: 1rem !important;
    }
    
    #callHistory .callhistorybox {
      background: #fff;
      max-width: 450px;
      right: -450px;
      left: auto;
      position: fixed;
      border-radius: 0;
      width: 96%;
      transition: .3s ease-in;
    }
    
    #callHistory .callhistorybox.show {
      right: 0;
    }
    
    #callHistory .callhistorybox .offcanvas-header h5 {
      display: inline-flex;
      align-items: center;
      margin: 0;
      padding: 0;
      font-weight: 500;
    }
    
    #callHistory .callhistorybox .offcanvas-header h5 span.title {
      display: inline-flex;
      align-items: center;
      position: relative;
    }
    
    #callHistory .callhistorybox .offcanvas-header h5 span.title img {
      margin-right: 10px;
    }
    
    #callHistory .callhistorybox .offcanvas-header h5 span.number {
      background: #F5F9FF;
      border: 0.5px solid #0065FF;
      color: #0065FF;
      margin-left: 10px;
      font-size: 12px;
      height: 24px;
      line-height: 16px;
    }
    
    #callHistory .callhistorybox .offcanvas-header h6 {
      font-size: 13px;
      margin-top: 5px;
      font-weight: 500;
      color: #787878;
    }
    
    #callHistory .callhistorybox .offcanvas-body {
      height: calc(100vh - 75px);
    }
    
    #callHistory .callhistorybox .offcanvas-body .searchinput {
      margin-bottom: 15px;
    }
    
    #callHistory .callhistorybox .offcanvas-body .searchinput .form-control {
      padding: 0.475rem 0.75rem;
      font-size: 14px;
      font-weight: normal;
      padding-left: 35px;
      background: url(../img/icon_search.png) no-repeat left 10px center;
    }
    
    #callHistory .callhistorybox .offcanvas-body ul.list-group {
      height: calc(100% - 0px);
      overflow-y: auto;
      padding-left: 40px;
    }
    
    #callHistory .callhistorybox .offcanvas-body ul.list-group li.list-group-item {
      border: none;
      border-radius: 10px;
      background: #f0f6ff;
      margin-bottom: 15px;
      font-size: 12px;
    }
    
    #callHistory .callhistorybox .offcanvas-body ul.list-group li.list-group-item h6 {
      font-size: 15px;
      margin-bottom: 5px;
      color: #000;
      display: flex;
      justify-content: space-between;
    }
    
    #callHistory .callhistorybox .offcanvas-body ul.list-group li.list-group-item h6 small {
      color: #787878;
      font-size: 12px;
      font-weight: normal;
    }
    
    #callHistory .callhistorybox .offcanvas-body ul.list-group li.list-group-item .ref-call {
      display: flex;
      justify-content: space-between;
      margin: 8px 0;
    }
    
    #callHistory .callhistorybox .offcanvas-body ul.list-group li.list-group-item .ref-call span.duration {
      color: black;
    }
    
    #callHistory .callhistorybox .offcanvas-body ul.list-group li.list-group-item .ref-call span.duration label.lblText {
      font-weight: 500;
      color: #787878;
      font-size: 12px;
    }
    
    #callHistory .callhistorybox .offcanvas-body ul.list-group li.list-group-item .callTypeIcon {
      position: absolute;
      left: -40px;
      display: inline-flex;
      flex-direction: column;
      text-align: center;
      margin: auto;
      top: 0;
      bottom: 0;
      align-self: start;
    }
    
    #callHistory .callhistorybox .offcanvas-body ul.list-group li.list-group-item .callTypeIcon .lblText {
      font-size: 11px;
      color: #787878;
      font-weight: 500;
      display: none;
    }
    
    
    
    
    #callHistory .callhistorybox .offcanvas-body ul.list-group li.list-group-item .des {
      color: #5A5A5A;
      padding-left: 18px;
      line-height: normal;
      background: url(https://static.pbcdn.in/pbpartners-cdn/images/icon-commt.png) no-repeat left top 3px;
    }
    
    #markActiveButton {
      white-space: nowrap;
    }
    
    #call-details.dropdown-menu {
      /* top: 0px;
      left: 150px;
      border-radius: 8px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12); */
      display: none;
      /* padding: 5px 10px; */
    }
    
    #call-details.dropdown-menu.show {
      /* position: absolute;
      background: #fff;
      z-index: 100;
      width: 150px; */
    }
    
    
    #dispositionId.form-control,
    #comment-field.form-control,
    #followUpDate.form-control,
    #selectTimeSlot.form-control {
      display: block;
      width: 100%;
      padding: 0.75rem;
      font-size: 13px;
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
      background: #fff;
      appearance: none;
    }
    
    #dispositionId.form-control,
    #selectTimeSlot.form-control {
      background: #fff url(https://static.pbcdn.in/pbpartners-cdn/images/icondown.png) no-repeat right 15px center;
      background-size: 11px;
      appearance: none;
    }
    
    
    #callHistory .callhistorybox .offcanvas-body ul.list-group li.list-group-item .datetime {
      margin-top: 5px;
      color: #808080;
      line-height: normal;
    }
    
    #callHistory .callhistorybox .offcanvas-body ul.list-group li.list-group-item:last-child {
      margin-bottom: 0;
    }
    
    #callHistory .callhistorybox .offcanvas-header div h5:last-child {
      display: none;
    }
    
    /* Responsive */
    @media(max-width: 480px) {
      #div#dialerAppHtml {
        margin-left: -60px;
      }
    }`;
    res.setHeader('Content-Type', 'text/css');
    res.status(200).send(css);
  };