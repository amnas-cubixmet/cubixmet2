import type { Metadata } from "next";
import AcademyCoursePage from "../../../../components/academy/AcademyCoursePage";
import { academyCourses } from "../../../../data/academyCourses";
const { coursePage, enrollUrl, brochureUrl, allProgramsUrl, highlights, curriculum, eligibleLearners } = academyCourses["advanced-digital-marketing-automation"];

export const metadata: Metadata = coursePage.metadata;

export default function AdvancedDigitalMarketingAutomationPage() {
  return (
    <AcademyCoursePage
      content={coursePage}
      enrollUrl={enrollUrl}
      brochureUrl={brochureUrl}
      allProgramsUrl={allProgramsUrl}
      highlights={highlights}
      curriculum={curriculum}
      eligibleLearners={eligibleLearners}
    />
  );
}
