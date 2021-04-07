import React from "react";
import Card from "../Reusables/Card";
import { Element } from "react-scroll";

function Qualities() {
	return (
		<>
			<Element id="qualities" name="qualities">
				<section className="qualities d-flex justify-content-center align-items-center flex-column">
					<header>
						<h4 className="text-center todo-title">Why IAT</h4>
					</header>
					<div className="card-wrapper-container  d-flex justify-content-center align-items-center">
						<div className="card-wrapper row">
							<Card
								cardLogo={
									<svg
										width="43"
										height="41"
										viewBox="0 0 43 41"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<ellipse
											cx="21.5"
											cy="20.5"
											rx="21.5"
											ry="20.5"
											fill="#73F5D5"
										/>
										<path
											d="M18.4843 18.557L17.7823 12.684L17.7803 12.61C17.7803 11.721 18.5003 11 19.3903 11C20.1923 11 20.9353 11.42 21.3673 12.135L21.4543 12.296L24.3993 18.386L28.3563 18.269C28.698 18.2594 29.0381 18.3173 29.3574 18.4393C29.6766 18.5613 29.9687 18.745 30.2169 18.98C30.465 19.215 30.6645 19.4966 30.8037 19.8087C30.9429 20.1208 31.0193 20.4574 31.0283 20.799L31.0293 20.865C31.0287 21.2078 30.9603 21.5471 30.8281 21.8634C30.6959 22.1797 30.5026 22.4667 30.2591 22.708C30.0156 22.9494 29.7269 23.1402 29.4095 23.2696C29.092 23.399 28.7521 23.4644 28.4093 23.462L24.4463 23.346L21.4543 29.534C21.2667 29.9222 20.9734 30.2495 20.6082 30.4786C20.2429 30.7077 19.8205 30.8291 19.3893 30.829C18.5003 30.829 17.7803 30.109 17.7803 29.198L17.7873 29.08L18.4943 23.172L16.3623 23.109L16.0923 23.845C15.9554 24.2196 15.7068 24.543 15.38 24.7716C15.0532 25.0002 14.6641 25.1228 14.2653 25.123C13.3893 25.123 12.6793 24.413 12.6793 23.536V22.776L12.5253 22.744C12.0941 22.6534 11.7071 22.4172 11.4293 22.0751C11.1516 21.733 11 21.3057 11 20.865C11 20.4243 11.1516 19.997 11.4293 19.6549C11.7071 19.3128 12.0941 19.0766 12.5253 18.986L12.6803 18.954V18.194C12.6803 17.391 13.2773 16.719 14.1143 16.615L14.2653 16.607C15.0103 16.607 15.6883 17.033 16.0303 17.734L16.0933 17.884L16.3633 18.62L18.4833 18.558L18.4843 18.557ZM19.3903 12.5C19.3303 12.5 19.2813 12.549 19.2803 12.587L20.1673 20.009L15.3273 20.15L14.6993 18.435L14.6673 18.356C14.5923 18.204 14.4373 18.106 14.3133 18.105L14.2553 18.107C14.2347 18.1097 14.2156 18.1198 14.2019 18.1354C14.1881 18.151 14.1804 18.1711 14.1803 18.192L14.1813 20.172L12.8313 20.454C12.7367 20.4733 12.6517 20.5248 12.5907 20.5996C12.5296 20.6744 12.4963 20.768 12.4963 20.8645C12.4963 20.961 12.5296 21.0546 12.5907 21.1294C12.6517 21.2042 12.7367 21.2557 12.8313 21.275L14.1813 21.556V23.536C14.1813 23.583 14.2193 23.622 14.2663 23.622C14.3578 23.622 14.447 23.5939 14.522 23.5415C14.5969 23.4891 14.654 23.4149 14.6853 23.329L15.3253 21.578L20.1793 21.719L19.2823 29.19V29.22C19.2823 29.28 19.3303 29.328 19.3903 29.328C19.5394 29.328 19.6855 29.286 19.8118 29.2067C19.9381 29.1275 20.0395 29.0142 20.1043 28.88L23.5193 21.817L28.4333 21.961C29.0393 21.961 29.5303 21.47 29.5303 20.875V20.832C29.5261 20.6879 29.4934 20.5461 29.4343 20.4146C29.3752 20.2832 29.2908 20.1646 29.1858 20.0658C29.0809 19.967 28.9575 19.8898 28.8227 19.8387C28.6879 19.7876 28.5444 19.7636 28.4003 19.768L23.4723 19.912L20.1213 12.98L20.0683 12.881C19.9976 12.7646 19.898 12.6684 19.7793 12.6017C19.6605 12.5349 19.5266 12.4999 19.3903 12.5Z"
											fill="black"
										/>
									</svg>
								}
								cardTitle="Fast Delivery Service"
								details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusamus rerum doloremque omnis quo cupiditate"
							/>
							<Card
								cardLogo={
									<svg
									width="43"
									height="41"
									viewBox="0 0 43 41"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M7.5 10.9425L5.5575 9L4.5 10.0575L7.5 13.0575L13.5 7.0575L12.4425 6L7.5 10.9425Z"
											fill="black"
										/>
										<path
											d="M9 21L4.368 18.5302C3.0475 17.8277 1.94323 16.7789 1.17369 15.4963C0.40416 14.2137 -0.0015848 12.7457 4.65193e-06 11.25V1.5C0.000401759 1.1023 0.158565 0.720996 0.439783 0.439778C0.721001 0.15856 1.1023 0.000397107 1.5 0H16.5C16.8977 0.000397107 17.279 0.15856 17.5602 0.439778C17.8414 0.720996 17.9996 1.1023 18 1.5V11.25C18.0016 12.7457 17.5958 14.2137 16.8263 15.4963C16.0568 16.7789 14.9525 17.8277 13.632 18.5302L9 21ZM1.5 1.5V11.25C1.49876 12.4738 1.83083 13.6749 2.46058 14.7243C3.09032 15.7737 3.99396 16.6318 5.0745 17.2065L9 19.2997L12.9255 17.2072C14.0062 16.6325 14.9099 15.7743 15.5396 14.7248C16.1694 13.6752 16.5014 12.474 16.5 11.25V1.5H1.5Z"
											fill="black"
										/>
									</svg>
								}
								cardTitle="Affordable"
								details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusamus rerum doloremque omnis quo cupiditate"
							/>
							<Card
								cardLogo={
									<svg
										width="43"
										height="41"
										viewBox="0 0 43 41"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<ellipse
											cx="21.5"
											cy="20.5"
											rx="21.5"
											ry="20.5"
											fill="#F7CCC2"
										/>
										<path
											d="M18.4843 18.557L17.7823 12.684L17.7803 12.61C17.7803 11.721 18.5003 11 19.3903 11C20.1923 11 20.9353 11.42 21.3673 12.135L21.4543 12.296L24.3993 18.386L28.3563 18.269C28.698 18.2594 29.0381 18.3173 29.3574 18.4393C29.6766 18.5613 29.9687 18.745 30.2169 18.98C30.465 19.215 30.6645 19.4966 30.8037 19.8087C30.9429 20.1208 31.0193 20.4574 31.0283 20.799L31.0293 20.865C31.0287 21.2078 30.9603 21.5471 30.8281 21.8634C30.6959 22.1797 30.5026 22.4667 30.2591 22.708C30.0156 22.9494 29.7269 23.1402 29.4095 23.2696C29.092 23.399 28.7521 23.4644 28.4093 23.462L24.4463 23.346L21.4543 29.534C21.2667 29.9222 20.9734 30.2495 20.6082 30.4786C20.2429 30.7077 19.8205 30.8291 19.3893 30.829C18.5003 30.829 17.7803 30.109 17.7803 29.198L17.7873 29.08L18.4943 23.172L16.3623 23.109L16.0923 23.845C15.9554 24.2196 15.7068 24.543 15.38 24.7716C15.0532 25.0002 14.6641 25.1228 14.2653 25.123C13.3893 25.123 12.6793 24.413 12.6793 23.536V22.776L12.5253 22.744C12.0941 22.6534 11.7071 22.4172 11.4293 22.0751C11.1516 21.733 11 21.3057 11 20.865C11 20.4243 11.1516 19.997 11.4293 19.6549C11.7071 19.3128 12.0941 19.0766 12.5253 18.986L12.6803 18.954V18.194C12.6803 17.391 13.2773 16.719 14.1143 16.615L14.2653 16.607C15.0103 16.607 15.6883 17.033 16.0303 17.734L16.0933 17.884L16.3633 18.62L18.4833 18.558L18.4843 18.557ZM19.3903 12.5C19.3303 12.5 19.2813 12.549 19.2803 12.587L20.1673 20.009L15.3273 20.15L14.6993 18.435L14.6673 18.356C14.5923 18.204 14.4373 18.106 14.3133 18.105L14.2553 18.107C14.2347 18.1097 14.2156 18.1198 14.2019 18.1354C14.1881 18.151 14.1804 18.1711 14.1803 18.192L14.1813 20.172L12.8313 20.454C12.7367 20.4733 12.6517 20.5248 12.5907 20.5996C12.5296 20.6744 12.4963 20.768 12.4963 20.8645C12.4963 20.961 12.5296 21.0546 12.5907 21.1294C12.6517 21.2042 12.7367 21.2557 12.8313 21.275L14.1813 21.556V23.536C14.1813 23.583 14.2193 23.622 14.2663 23.622C14.3578 23.622 14.447 23.5939 14.522 23.5415C14.5969 23.4891 14.654 23.4149 14.6853 23.329L15.3253 21.578L20.1793 21.719L19.2823 29.19V29.22C19.2823 29.28 19.3303 29.328 19.3903 29.328C19.5394 29.328 19.6855 29.286 19.8118 29.2067C19.9381 29.1275 20.0395 29.0142 20.1043 28.88L23.5193 21.817L28.4333 21.961C29.0393 21.961 29.5303 21.47 29.5303 20.875V20.832C29.5261 20.6879 29.4934 20.5461 29.4343 20.4146C29.3752 20.2832 29.2908 20.1646 29.1858 20.0658C29.0809 19.967 28.9575 19.8898 28.8227 19.8387C28.6879 19.7876 28.5444 19.7636 28.4003 19.768L23.4723 19.912L20.1213 12.98L20.0683 12.881C19.9976 12.7646 19.898 12.6684 19.7793 12.6017C19.6605 12.5349 19.5266 12.4999 19.3903 12.5Z"
											fill="black"
										/>
									</svg>
								}
								cardTitle="Affordable"
								details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusamus rerum doloremque omnis quo cupiditate"
							/>
						</div>
					</div>
				</section>
			</Element>
		</>
	);
}

export default Qualities;
