$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/features/manageAccess.feature");
formatter.feature({
  "name": "Manage Access",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify admin can add new users",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to Interview Prep",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.iNavigateToInterviewPrep()"
});
formatter.write("2021-02-28 11:05:08 PASS: Successfully navigated to the url");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"Login\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iShouldSeeThePage(String)"
});
formatter.write("2021-02-28 11:05:11 PASS: Login page is displayed");
formatter.embedding("image/png", "embedded0.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"admin@yahoo.com\" in the \"Enter Username\" input box",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iEnterInTheInputBox(String,String)"
});
formatter.write("2021-02-28 11:05:14 PASS: admin@yahoo.com was entered in Enter Username input box successfully");
formatter.embedding("image/png", "embedded1.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"adminUserPassword\" in the \"Enter Password\" input box",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iEnterInTheInputBox(String,String)"
});
formatter.write("2021-02-28 11:05:16 PASS: adminuser123 was entered in Enter Password input box successfully");
formatter.embedding("image/png", "embedded2.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Login\" button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iClickButton(String)"
});
formatter.write("2021-02-28 11:05:19 PASS: Login button was successfully clicked ");
formatter.embedding("image/png", "embedded3.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"Home\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iShouldSeeThePage(String)"
});
formatter.write("2021-02-28 11:05:22 PASS: Home page is displayed");
formatter.embedding("image/png", "embedded4.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Manage Access\" link",
  "keyword": "And "
});
formatter.match({
  "location": "ManageAccessSteps.iClickLink(String)"
});
formatter.write("2021-02-28 11:05:26 PASS: Manage Access was successfully clicked ");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the following values in the following fields",
  "rows": [
    {
      "cells": [
        "First Name",
        "Will"
      ]
    },
    {
      "cells": [
        "Last Name",
        "Smith"
      ]
    },
    {
      "cells": [
        "E-mail",
        "will.smith@gmail.com"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ManageAccessSteps.iEnterTheFollowingValuesInTheFollowingFields(String,String\u003e)"
});
formatter.write("2021-02-28 11:05:26 PASS: Will was entered in First Name input box successfully");
formatter.embedding("image/png", "embedded5.png", null);
formatter.write("2021-02-28 11:05:27 PASS: Smith was entered in Last Name input box successfully");
formatter.embedding("image/png", "embedded6.png", null);
formatter.write("2021-02-28 11:05:27 PASS: will.smith@gmail.com was entered in E-mail input box successfully");
formatter.embedding("image/png", "embedded7.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I choose \"Instructor\" from dropdown \"Role\"",
  "keyword": "And "
});
formatter.match({
  "location": "ManageAccessSteps.iChooseFromDropdown(String,String)"
});
formatter.write("2021-02-28 11:05:28 PASS: Instructor was successfully selected from dropdown Role");
formatter.embedding("image/png", "embedded8.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I choose \"10\" from dropdown \"Batch\"",
  "keyword": "And "
});
formatter.match({
  "location": "ManageAccessSteps.iChooseFromDropdown(String,String)"
});
formatter.write("2021-02-28 11:05:28 PASS: 10 was successfully selected from dropdown Batch");
formatter.embedding("image/png", "embedded9.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Add User\" button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iClickButton(String)"
});
formatter.write("2021-02-28 11:05:29 PASS: Add User button was successfully clicked ");
formatter.embedding("image/png", "embedded10.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the following user exists in the table",
  "rows": [
    {
      "cells": [
        "First Name",
        "admin"
      ]
    },
    {
      "cells": [
        "Last Name",
        "admin"
      ]
    },
    {
      "cells": [
        "E-mail",
        "admin@yahoo.com"
      ]
    },
    {
      "cells": [
        "Role",
        "Mentor"
      ]
    },
    {
      "cells": [
        "Batch",
        "N/A"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ManageAccessSteps.verifyTheFollowingUserExistsInTheTable(String,String\u003e)"
});
formatter.write("2021-02-28 11:05:36 PASS: The user exists in row 6");
formatter.write("2021-02-28 11:05:36 PASS: The user exists");
formatter.embedding("image/png", "embedded11.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Action\" button of user \"will.smith@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "ManageAccessSteps.iClickButtonOfUser(String,String)"
});
formatter.write("2021-02-28 11:05:36 PASS: Successfully clicked the button Action for will.smith@gmail.com");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Edit\" button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iClickButton(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d88.0.4324.192)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Timofeis-MBP.home\u0027, ip: \u0027fe80:0:0:0:415:a823:69f1:a3d7%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.192, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: /var/folders/fy/8dxjg88n5zx...}, goog:chromeOptions: {debuggerAddress: localhost:63297}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 7b055d261ea878eec7381c583a95627c\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat impls.LoginImpl.clickButton(LoginImpl.java:86)\n\tat steps.LoginSteps.iClickButton(LoginSteps.java:32)\n\tat ✽.I click \"Edit\" button(file:src/main/resources/features/manageAccess.feature:27)\n",
  "status": "failed"
});
formatter.step({
  "name": "I edit the user with following",
  "rows": [
    {
      "cells": [
        "Email",
        "will.smith.new@gmail.com"
      ]
    },
    {
      "cells": [
        "Role",
        "Mentor"
      ]
    },
    {
      "cells": [
        "Batch",
        "N/A"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ManageAccessSteps.iEditTheUserWithFollowing(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click \"Update User\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iClickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the following user exists in the table",
  "rows": [
    {
      "cells": [
        "First Name",
        "Will"
      ]
    },
    {
      "cells": [
        "Last Name",
        "Smith"
      ]
    },
    {
      "cells": [
        "E-mail",
        "will.smith.new@gmail.com"
      ]
    },
    {
      "cells": [
        "Role",
        "Mentor"
      ]
    },
    {
      "cells": [
        "Batch",
        "N/A"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ManageAccessSteps.verifyTheFollowingUserExistsInTheTable(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click \"Action\" button of user \"will.smith.new@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "ManageAccessSteps.iClickButtonOfUser(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click \"Delete\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iClickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click \"Delete\" button in \"User Delete Window\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iClickButtonIn(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the following user does NOT exist in the table",
  "rows": [
    {
      "cells": [
        "First Name",
        "John"
      ]
    },
    {
      "cells": [
        "Last Name",
        "Smith"
      ]
    },
    {
      "cells": [
        "E-mail",
        "john.smith@gmail.com"
      ]
    },
    {
      "cells": [
        "Role",
        "Instructor"
      ]
    },
    {
      "cells": [
        "Batch",
        "4"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ManageAccessSteps.verifyTheFollowingUserDoesNOTExistInTheTable(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});