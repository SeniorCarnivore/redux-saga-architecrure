import React, { memo } from "react";
import { connect } from "react-redux";
import { State } from "../../model/model";

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader = memo((props: PreloaderProps) =>
  props.isLoading ? (
    <div style={{ textAlign: "center" }}>
      <h1>LOADING</h1>
    </div>
  ) : null
);

const mapStateToProps = (state: State) => ({ isLoading: state.isLoading });

export const PreloaderContainer = connect(mapStateToProps)(Preloader);
