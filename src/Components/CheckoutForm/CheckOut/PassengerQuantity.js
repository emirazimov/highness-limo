import { makeStyles, useMediaQuery } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import React from "react"
import { useFormContext } from "react-hook-form"
import {
  MinusIcon,
  // NumberOfPassengers,
  NumberOfPassengersIcon,
  PlusIcon,
} from "../../../assets/icons"
import "./index.css"
const useStyles = makeStyles((theme) => ({
  mainPlusMinusContainer: {
    height: "34px",
    borderBottom: "2px solid #AC8159",
    transition: "200ms",
    "&:hover": { borderBottom: "2px solid white", transition: "200ms" },
  },
}))

export default React.memo(function PassengerQuantity({
  passengersqState,
  setPassengers,
  passengers,
  passengersQuantityForBackStep,
  setPassengersQuantityForBackStep,
}) {
  const classes = useStyles()
  const { register } = useFormContext()

  const onDecrease = () => {
    if (passengersQuantityForBackStep === 0) {
      return
    }
    let progress = passengersQuantityForBackStep - 1
    setPassengers((passengers) => passengers - 1)
    setPassengersQuantityForBackStep(progress)
  }
  const onIncrease = (e) => {
    if (passengersQuantityForBackStep === 14) {
      return
    }
    let progress = passengersQuantityForBackStep + 1
    setPassengers((passengers) => passengers + 1)
    setPassengersQuantityForBackStep(progress)

    console.log(passengersQuantityForBackStep)
  }
  // console.log(passengersQuantityForBackStep)
  //   React.useEffect(() => {
  //     setPassengers(parseInt(passengersqState))
  //   }, [passengersqState])
  const isMobile = useMediaQuery("(max-width:340px)")
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      style={{ marginTop: "13px" }}
    >
      <Grid item>
        <Grid container direction="row">
          <NumberOfPassengersIcon
            style={{ paddingLeft: "30px" }}
          ></NumberOfPassengersIcon>
          <Typography
            style={{
              color: "white",
              fontSize: "14px",
              wordWrap: "break-word",

              width: isMobile ? "130px" : "none",
            }}
          >
            Number of passengers
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          className={classes.mainPlusMinusContainer}
          // style={{
          //   // background: "#282828",
          //   // height: "35px",
          //   // borderRadius: "5px",

          //   // paddingTop: "-4px",
          // }}
        >
          <Grid
            item
            // style={{
            //   borderBottom: "2px solid #AC8159",
            //   "&:hover": { borderBottom: "2px solid white" },
            // }}
          >
            <span
              onClick={onDecrease}
              style={
                {
                  // marginRight: "5px",
                }
              }
            >
              <MinusIcon />
            </span>
          </Grid>
          <Grid
            style={{
              textAlign: "center",
              // borderBottom: "2px solid #AC8159",
              // height: "100%",
            }}
          >
            <input
              ref={register}
              name="passengersQuantity"
              onChange={(e) => {
                setPassengers(e.target.value)
                setPassengersQuantityForBackStep(e.target.value)
              }}
              className="passenger"
              value={passengersQuantityForBackStep}
              size="1"
              style={{
                // pointerEvents: "none",
                minWidth: "34px",
                maxWidth: "34px",
                // marginLeft: "2px",
                // marginRight: "2.5px",
                // marginBottom: "4px",
                backgroundColor: "transparent",
                border: "none",
                color: "white",
                textAlign: "center",
                fontFamily: "Roboto",
                textTransform: "none",
                fontWeight: "400",
                fontSize: "14px",
                // height: "100%",
                // borderBottom: "2px solid #AC8159",
              }}
              type="number"
            />
          </Grid>
          <Grid item>
            <span
              onClick={onIncrease}
              // style={{ marginLeft: "4px" }}
            >
              <PlusIcon />
            </span>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
})
