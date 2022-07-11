const ONE_TRILLION = 1000000000000;	

export default function	transform(data) {
	
const country = data.Country;	
const have_cookies_knowledge_perc = parseInt(data["Individuals know that cookies can be used to trace movements of people on the internet (3 months)"], 10);
const change_default_settings_perc = parseInt(data["Individuals have ever changed the settings in their internet browser to prevent or limit cookies on any of their devices (3 months)"], 10);
const use_restrictive_software_perc = parseInt(data["Individuals use software that limits the ability to track their activities on the internet (3 months)"], 10);
const manage_personal_data_perc = parseInt(data["Individuals manage access to personal data on the internet (3 months): at least one of I_MAPS_RPS, I_MAPS_RRGL, I_MAPS_LAP, I_MAPS_RAAD, I_MAPS_CWSC"], 10);
	
return {
		country,
		have_cookies_knowledge_perc,
		change_default_settings_perc,
		use_restrictive_software_perc,
		manage_personal_data_perc
	}
};