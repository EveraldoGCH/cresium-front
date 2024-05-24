"use client";
import { Card } from "@/components/core/Card/Card";
import { colorsVars } from "@/utils/colorsVars";
import {
	Box,
	CardActions,
	CardContent,
	Divider,
	Grid,
	IconButton,
	Skeleton,
	Snackbar,
	Typography,
} from "@mui/material";
import { Copy06 } from "../../../../../public/assets/iconsComponents/iconsComponents";
import { useGetDatosCuenta } from "@/hooks/apiCalls/get/useGetDatosCuenta";
import { useState } from "react";
import { copyTextToClipboard } from "@/utils/helpers/copy";

export function CardDatosCuenta(): React.JSX.Element {
	const [open, setOpen] = useState(false);
	let { data: datosCuenta, isLoading: loadingDatosCuenta } = useGetDatosCuenta();

	const clickCopy = async (text: string) => {
		await copyTextToClipboard(text)
		setOpen(true);
	};

	const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	if (loadingDatosCuenta) {
		return (
			<Card>
				<CardContent style={{ padding: "16px 24px 16px 24px" }}>
					<Typography variant="subtitle2">
						Datos de la cuenta
					</Typography>
				</CardContent>
				<Divider style={{ width: "100%" }} />
				<CardActions style={{ padding: "16px 24px" }}>
					<Grid container direction={"column"}>
						{/*Contenedor Alias y cvu */}
						<Box width={"100%"} flexWrap={"nowrap"}>
							<Grid container xs={12}>
								<Grid item container xs={8} direction={"column"} gap={"4px"}>
									<Typography
										variant="subtitle2"
										color={colorsVars.grey500}
										fontSize={"18px"}
									>
										Alias
									</Typography>
									<Skeleton variant="text" width={"100%"} height={"21px"} />
								</Grid>
								<Grid item xs={4}>
									<div style={{ width: "24px", height: "30px" }} />
								</Grid>
							</Grid>
						</Box>
						<Grid item xs={12}>
							<Divider style={{ width: "100%", margin: "16px 0" }} />
						</Grid>
						<Box width={"100%"} flexWrap={"nowrap"}>
							<Grid container xs={12}>
								<Grid item container xs={8} direction={"column"} gap={"4px"}>
									<Typography
										variant="subtitle2"
										color={colorsVars.grey500}
										fontSize={"18px"}
									>
										CVU
									</Typography>
									<Skeleton variant="text" width={"100%"} height={"21px"} />
								</Grid>
								<Grid item xs={4}>
									<div style={{ width: "24px", height: "30px" }} />
								</Grid>
							</Grid>
						</Box>
					</Grid>
					{/*FIN Contenedor Alias y cvu */}
				</CardActions>
			</Card>
		)
	}

	return (
		<Card>
			<CardContent style={{ padding: "16px 24px 16px 24px" }}>
				<Typography variant="subtitle2">
					Datos de la cuenta
				</Typography>
			</CardContent>
			<Divider style={{ width: "100%" }} />
			<CardActions style={{ padding: "16px 24px" }}>
				<Grid container direction={"column"}>
					{/*Contenedor Alias y cvu */}
					<Box width={"100%"} flexWrap={"nowrap"}>
						<Grid container xs={12}>
							<Grid item container xs={8} direction={"column"} gap={"4px"}>
								<Typography
									variant="subtitle2"
									color={colorsVars.grey500}
									fontSize={"18px"}
								>
									Alias
								</Typography>
								<Typography variant="subtitle2" fontSize={"18px"}>
									{datosCuenta![0].value}
								</Typography>
							</Grid>
							<Grid
								item
								container
								xs={4}
								justifyContent={"flex-end"}
								alignItems={"center"}
							>

								<IconButton style={{ padding: "3px" }} onClick={() => clickCopy(datosCuenta![0].value)}>
									<Copy06
										style={{ cursor: "pointer", colors: colorsVars.primary600 }}
									/>
								</IconButton>
							</Grid>
						</Grid>
					</Box>
					<Grid item xs={12}>
						<Divider style={{ width: "100%", margin: "16px 0" }} />
					</Grid>
					<Box width={"100%"} flexWrap={"nowrap"}>
						<Grid container xs={12}>
							<Grid item container xs={8} direction={"column"} gap={"4px"}>
								<Typography
									variant="subtitle2"
									color={colorsVars.grey500}
									fontSize={"18px"}
								>
									CVU
								</Typography>
								<Typography variant="subtitle2" fontSize={"18px"}>
									{datosCuenta![1].value}
								</Typography>
							</Grid>
							<Grid
								item
								container
								xs={4}
								justifyContent={"flex-end"}
								alignItems={"center"}
							>

								<IconButton style={{ padding: "3px" }} onClick={() => clickCopy(datosCuenta![1].value)}>
									<Copy06
										style={{ cursor: "pointer", colors: colorsVars.primary600 }}
									/>
								</IconButton>
							</Grid>
						</Grid>
					</Box>
				</Grid>
				{/*FIN Contenedor Alias y cvu */}
			</CardActions>
			<Snackbar
				open={open}
				autoHideDuration={1500}
				onClose={handleClose}
				message="Copiado al portapapeles"
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
			/>
		</Card>
	);
}

