import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Web from "@material-ui/icons/Web";
import Smartphone from "@material-ui/icons/Smartphone";
// core components
import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/perfil.png";

import studio1 from "assets/img/makeit/01.png";
import studio2 from "assets/img/makeit/02.png";
import studio4 from "assets/img/osteo/01.png";
import studio5 from "assets/img/osteo/02.png";
import work1 from "assets/img/vestSurf/01.png";
import work2 from "assets/img/vestSurf/02.png";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
	const classes = useStyles();
	const { ...rest } = props;
	const imageClasses = classNames(
		classes.imgRaised,
		classes.imgRoundedCircle,
		classes.imgFluid
	);
	const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
	return (
		<div>
			<Header
				color="transparent"
				brand="Personal Web Site"
				rightLinks={<HeaderLinks />}
				fixed
				changeColorOnScroll={{
					height: 200,
					color: "white",
				}}
				{...rest}
			/>
			<Parallax small filter image={require("assets/img/bg7.jpg").default} />
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div>
					<div className={classes.container}>
						<GridContainer justify="center">
							<GridItem xs={12} sm={12} md={6}>
								<div className={classes.profile}>
									<div>
										<img
											src={profile}
											alt="profile perfil image"
											className={imageClasses}
										/>
									</div>
									<div className={classes.name}>
										<h3 className={classes.title}>Luiz Claudio</h3>
										<h6>Developer</h6>
										<Button justIcon link className={classes.margin5}>
											<i className={"fab fa-twitter"} />
										</Button>
										<Button justIcon link className={classes.margin5}>
											<i className={"fab fa-linkedin"} />
										</Button>
										<Button justIcon link className={classes.margin5}>
											<i className={"fab fa-instagram"} />
										</Button>
										<Button justIcon link className={classes.margin5}>
											<i className={"fab fa-facebook"} />
										</Button>
									</div>
								</div>
							</GridItem>
						</GridContainer>
						<div className={classes.description}>
							<p>
								Um desenvolvedor jovem porém, formado em Ciência da computação
								em 2017 pela Anhanguera Educacional, trabalho atualmente em
								freelancers utilizando as melhores tecnologias, sendo entre
								elas: ReactJS, ReactNative, Laravel, MySQL, PostgreSql,
								TypeScript, PHP, javasScript...
							</p>
						</div>
						<GridContainer justify="center">
							<GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
								<NavPills
									alignCenter
									color="primary"
									tabs={[
										{
											tabButton: "WEB",
											tabIcon: Web,
											tabContent: (
												<GridContainer justify="center">
													<GridItem xs={12} sm={12} md={4}>
														<a
															href="https://www.behance.net/gallery/120589899/MAKEIT-TAKEIT"
															target="_blank"
															rel="noreferrer"
														>
															<img
																alt="..."
																src={studio1}
																className={navImageClasses}
															/>
														</a>
														<a
															href="https://www.behance.net/gallery/120589899/MAKEIT-TAKEIT"
															target="_blank"
															rel="noreferrer"
														>
															<img
																alt="..."
																src={studio2}
																className={navImageClasses}
															/>
														</a>
													</GridItem>
													<GridItem xs={12} sm={12} md={4}>
														<a
															href="https://www.behance.net/gallery/116184709/Espaco-Osteo-Reabilith"
															target="_blank"
															rel="noreferrer"
														>
															<img
																alt="..."
																src={studio5}
																className={navImageClasses}
															/>
														</a>
														<a
															href="https://www.behance.net/gallery/116184709/Espaco-Osteo-Reabilith"
															target="_blank"
															rel="noreferrer"
														>
															<img
																alt="..."
																src={studio4}
																className={navImageClasses}
															/>
														</a>
													</GridItem>
												</GridContainer>
											),
										},
										{
											tabButton: "Mobile",
											tabIcon: Smartphone,
											tabContent: (
												<GridContainer justify="center">
													<GridItem xs={12} sm={12} md={4}>
														<a
															href="https://www.behance.net/gallery/116178709/App-VestSurf"
															target="_blank"
															rel="noopener noreferrer"
														>
															<img
																alt="..."
																src={work1}
																className={navImageClasses}
															/>
														</a>
														<a
															href="https://www.behance.net/gallery/116178709/App-VestSurf"
															target="_blank"
															rel="noopener noreferrer"
														>
															<img
																alt="..."
																src={work2}
																className={navImageClasses}
															/>
														</a>
													</GridItem>
												</GridContainer>
											),
										},
									]}
								/>
							</GridItem>
						</GridContainer>
					</div>
				</div>
			</div>
			<br />
		</div>
	);
}
