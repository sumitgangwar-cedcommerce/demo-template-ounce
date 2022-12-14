import {
  Alert,
  Button,
  Card,
  CheckBox,
  FlexChild,
  FlexLayout,
  FormElement,
  OverlappingImages,
  TextField,
} from "@cedcommerce/ounce-ui";
import "./App.css";

function App() {
  return (
    <FlexLayout wrap="None">
      <FlexChild desktopWidth="50" mobileWidth="50" tabWidth="50">
          <Card>
            <div className="form-section">
            <img
              src="https://angular-material.fusetheme.com/assets/images/logo/logo.svg"
              alt="logo"
            />
            <h1>Sign in</h1>
            <h4>
              Dont have an account? <a href="#">Sign up</a>
            </h4>
            <div className="alert-box">
            <Alert
              desciption={``}
              destroy
              onClose={function noRefCheck() {}}
              type="success"
            >
              You are browsing Fuse Demo. Click on the "Sign in" button to access the Demo and Documentation.
            </Alert>
            </div>
            <FormElement>
              <TextField
                name="Email Address"
                required
                onChange={function noRefCheck() {}}
                placeHolder="Enter Fname"
                value=""
              />
              <TextField
                name="Password"
                required
                type="password"
                onChange={function noRefCheck() {}}
                placeHolder="Enter Fname"
                value=""
              />
              <FlexLayout halign="fill">
                <CheckBox
                  id="chk"
                  labelVal="Remember Me"
                  onClick={function noRefCheck() {}}
                />
                <a href="#">Forgot Password?</a>
              </FlexLayout>
              <Button content="Sign In" length={"fullBtn"} />
            </FormElement>
            <div className="text-line">
              <div></div>
              <span>Or continue with</span>
            </div>
            <FlexLayout halign="fill">
              <Button
                type="Outlined"
                icon={
                  <svg
                    x="48"
                    y="192"
                    viewBox="0 0 24 24"
                    fit=""
                    height="25"
                    width="25"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                  >
                    <path
                      fill="none"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke="currentColor"
                      d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1v0h3z"
                    ></path>
                  </svg>
                }
              />
              <Button
                type="Outlined"
                icon={
                  <svg
                    x="432"
                    y="480"
                    viewBox="0 0 24 24"
                    fit=""
                    height="25"
                    width="25"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                  >
                    <path
                      fill="none"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke="currentColor"
                      d="M23 3c-.9.642-1.943 1.164-3.063 1.509l-.077.021A4.48 4.48 0 0012 7.47v.063-.003 1a10.646 10.646 0 01-8.977-4.496l-.022-.033s-4 9 5 13A11.54 11.54 0 01.978 19l.023.001c9 5 20 0 20-11.5a4.5 4.5 0 00-.085-.859l.005.029a7.717 7.717 0 002.069-3.617l.011-.053z"
                    ></path>
                  </svg>
                }
              />
              <Button
                type="Outlined"
                icon={
                  <svg
                    x="1056"
                    y="192"
                    viewBox="0 0 24 24"
                    fit=""
                    height="25"
                    width="25"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                  >
                    <path
                      fill="none"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke="currentColor"
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.36 3.36 0 00-.941-2.611l.001.001c3.14-.35 6.44-1.54 6.44-7a5.422 5.422 0 00-1.502-3.752L20 4.77a4.97 4.97 0 00.32-1.773c0-.722-.151-1.408-.423-2.03L19.91 1S18.73.65 16 2.48c-1.05-.296-2.255-.466-3.5-.466s-2.45.17-3.594.488L9 2.48C6.27.65 5.09 1 5.09 1a4.992 4.992 0 00-.41 1.997c0 .637.117 1.246.332 1.807L5 4.769A5.418 5.418 0 003.5 8.52v.03-.002c0 5.42 3.3 6.61 6.44 7a3.357 3.357 0 00-.939 2.591L9 18.128v3.87"
                    ></path>
                  </svg>
                }
              />
            </FlexLayout>
            </div>
          </Card>
      </FlexChild>
      <FlexChild desktopWidth="50" mobileWidth="0" tabWidth="50">
        <div className="banner-secton">
          <svg
            viewBox="0 0 960 540"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMax slice"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute inset-0 pointer-events-none ng-tns-c135-1"
          >
            <g
              fill="none"
              stroke="#232F41"
              stroke-width="100"
              class="text-gray-700 opacity-25 ng-tns-c135-1"
            >
              <circle r="234" cx="196" cy="23" class="ng-tns-c135-1"></circle>
              <circle r="234" cx="790" cy="491" class="ng-tns-c135-1"></circle>
            </g>
          </svg>
          <svg
            viewBox="0 0 220 192"
            width="150"
            height="122"
            fill="none"
            class="absolute -top-16 -right-16 text-gray-700 ng-tns-c135-1"
          >
            <defs class="ng-tns-c135-1">
              <pattern
                id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
                class="ng-tns-c135-1"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  fill="currentColor"
                  class="ng-tns-c135-1"
                ></rect>
              </pattern>
            </defs>
            <rect
              width="220"
              height="192"
              fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
              class="ng-tns-c135-1"
            ></rect>
          </svg>
          <FlexLayout direction="vertical">
            <h1>Welcome to <br /> our community</h1>
            <p>
              Fuse helps developers to build organized and well coded dashboards
              full of beautiful and rich modules. Join us and start building
              your application today.
            </p>
          </FlexLayout>
          <FlexLayout halign="fill" wrap="noWrap">
            <OverlappingImages>
              <img src='https://angular-material.fusetheme.com/assets/images/avatars/female-18.jpg' alt='#' />
              <img src='https://angular-material.fusetheme.com/assets/images/avatars/female-11.jpg' alt='#' />
              <img src='https://angular-material.fusetheme.com/assets/images/avatars/male-09.jpg' alt='#' />
              <img src='https://angular-material.fusetheme.com/assets/images/avatars/male-16.jpg' alt='#' />
            </OverlappingImages>
            <p>More than 17k people joined us, it's your turn</p>
          </FlexLayout>
        </div>
      </FlexChild>
      <div className="setting-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" fit="" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false">
            <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
        </svg>
      </div>
    </FlexLayout>
  );
}

export default App;
