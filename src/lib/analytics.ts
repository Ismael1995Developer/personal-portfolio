// Google Analytics configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track specific business events
export const trackLandingPageInteraction = (
  interaction: string,
  value?: number,
) => {
  event({
    action: interaction,
    category: "Landing Page",
    label: "User Interaction",
    value: value,
  });
};

export const trackPlanSelection = (planName: string, planPrice: number) => {
  event({
    action: "plan_selected",
    category: "Pricing",
    label: planName,
    value: planPrice,
  });
};

export const trackFeatureSelection = (
  featureName: string,
  featurePrice: number,
) => {
  event({
    action: "feature_selected",
    category: "Customization",
    label: featureName,
    value: featurePrice,
  });
};

export const trackWhatsAppClick = (context: string) => {
  event({
    action: "whatsapp_click",
    category: "Contact",
    label: context,
  });
};

export const trackFormSubmission = (formName: string) => {
  event({
    action: "form_submit",
    category: "Lead Generation",
    label: formName,
  });
};

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>,
    ) => void;
  }
}
