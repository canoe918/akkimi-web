"use client";

import GrowthTypeSurvey from "./GrowthTypeSurvey";
import GrowthTypeSurveyResult from "./GrowthTypeSurveyResult";
import ProgressBar from "./ProgressBar";

const growthTypeData = [{}];

export default function GrowthTypeSurveySection() {
  return (
    <>
      <ProgressBar current={25} start={0} end={100} />

      <GrowthTypeSurvey />

      <GrowthTypeSurveyResult />
    </>
  );
}
