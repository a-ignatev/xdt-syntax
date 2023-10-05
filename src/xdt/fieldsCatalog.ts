export type Field = {
  name: string;
  minLength?: number;
  maxLength?: number;
};

export const fieldsCatalog: Record<string, Field> = {
  "0102": {
    name: "Softwareverantwortlicher (SV)",
    minLength: 0,
    maxLength: 60,
  },
  "0103": { name: "Software", minLength: 0, maxLength: 60 },
  "0105": {
    name: "KBV-Prüfnummer",
    minLength: 15,
    maxLength: 17,
  },
  "0111": {
    name: "Email-Adresse des SV",
    minLength: 0,
    maxLength: 60,
  },
  "0121": {
    name: "Straße des SV",
    minLength: 0,
    maxLength: 60,
  },
  "0122": {
    name: "PLZ des SV",
    minLength: 0,
    maxLength: 7,
  },
  "0123": { name: "Ort des SV", minLength: 0, maxLength: 60 },
  "0124": {
    name: "Telefonnummer des SV",
    minLength: 0,
    maxLength: 60,
  },
  "0125": {
    name: "Telefaxnummer des SV",
    minLength: 0,
    maxLength: 60,
  },
  "0126": {
    name: "Regionaler Systembetreuer (SB)",
    minLength: 0,
    maxLength: 60,
  },
  "0127": {
    name: "Straße des SB",
    minLength: 0,
    maxLength: 60,
  },
  "0128": {
    name: "PLZ des SB",
    minLength: 0,
    maxLength: 7,
  },
  "0129": { name: "Ort des SB", minLength: 0, maxLength: 60 },
  "0130": {
    name: "Telefonnummer des SB",
    minLength: 0,
    maxLength: 60,
  },
  "0131": {
    name: "Telefaxnummer des SB",
    minLength: 0,
    maxLength: 60,
  },
  "0132": {
    name: "Release-Stand der Software",
    minLength: 0,
    maxLength: 60,
  },
  "0201": {
    name: "Betriebs- (BSNR) oder Nebenbetriebsstättennummer (NBSNR)",
    minLength: 9,
    maxLength: 9,
  },
  "0203": {
    name: "(N)BSNR-/KrankenhausBezeichnung",
    minLength: 0,
    maxLength: 60,
  },
  "0205": {
    name: "Straße der (N)BSNR-/Krankenhaus- Adresse",
    minLength: 0,
    maxLength: 60,
  },
  "0208": {
    name: "Telefonnummer",
    minLength: 0,
    maxLength: 60,
  },
  "0209": {
    name: "Telefaxnummer",
    minLength: 0,
    maxLength: 60,
  },
  "0211": {
    name: "Arztname oder Erläuterung",
    minLength: 0,
    maxLength: 60,
  },
  "0212": {
    name: "Lebenslange Arztnummer (LANR)",
    minLength: 9,
    maxLength: 9,
  },
  "0213": {
    name: "Krankenhaus-IK (im Rahmen der ASV-Abrechnung)",
    minLength: 9,
    maxLength: 9,
  },
  "0214": { name: "KV-Bereich", minLength: 2, maxLength: 2 },
  "0215": {
    name: "PLZ der (N)BSNR-/Krankenhaus-Adresse",
    minLength: 0,
    maxLength: 7,
  },
  "0216": {
    name: "Ort der (N)BSNR-/Krankenhaus-Adresse",
    minLength: 0,
    maxLength: 60,
  },
  "0218": {
    name: "E-Mail der Betriebsstätte/Praxis/Krankenhaus",
    minLength: 0,
    maxLength: 60,
  },
  "0219": {
    name: "Titel des Arztes",
    minLength: 0,
    maxLength: 20,
  },
  "0220": {
    name: "Arztvorname",
    minLength: 0,
    maxLength: 45,
  },
  "0221": {
    name: "Namenszusatz des Arztes",
    minLength: 0,
    maxLength: 20,
  },
  "0222": {
    name: "ASV-Teamnummer",
    minLength: 9,
    maxLength: 9,
  },
  "0223": {
    name: "Pseudo-LANR für Krankenhausärzte im Rahmen der ASV-Abrechnung",
    minLength: 9,
    maxLength: 9,
  },
  "0224": {
    name: "Produkttypversion des Konnektors",
    minLength: 0,
    maxLength: 20,
  },
  "0300": {
    name: "Abrechnung von (zertifikatspflichtigen) Laborleistungen",
    minLength: 1,
    maxLength: 1,
  },
  "0301": {
    name: "pnSD/uu-Analysen",
    minLength: 1,
    maxLength: 1,
  },
  "0302": {
    name: "Gerätetyp",
    minLength: 0,
    maxLength: 60,
  },
  "0303": {
    name: "Hersteller",
    minLength: 0,
    maxLength: 60,
  },
  "0304": { name: "Analyt-ID", minLength: 3, maxLength: 3 },
  "0305": {
    name: "RV-Zertifikat",
    minLength: 1,
    maxLength: 1,
  },
  "3000": {
    name: "Patientennummer",
    minLength: 0,
    maxLength: 20,
  },
  "3003": {
    name: "Schein-ID",
    minLength: 0,
    maxLength: 60,
  },
  "3006": {
    name: "CDM Version",
    minLength: 5,
    maxLength: 11,
  },
  "3010": {
    name: "Datum und Uhrzeit der Onlineprüfung und -aktualisierung (Timestamp)",
    minLength: 14,
    maxLength: 14,
  },
  "3011": {
    name: "Ergebnis der Onlineprüfung und -aktualisierung",
    minLength: 1,
    maxLength: 1,
  },
  "3012": {
    name: "Error-Code",
    minLength: 0,
    maxLength: 5,
  },
  "3013": {
    name: "Prüfziffer des Fachdienstes",
    minLength: 0,
    maxLength: 88,
  },
  "3100": {
    name: "Namenszusatz",
    minLength: 0,
    maxLength: 20,
  },
  "3101": { name: "Name", minLength: 0, maxLength: 45 },
  "3102": { name: "Vorname", minLength: 0, maxLength: 45 },
  "3103": {
    name: "Geburtsdatum",
    minLength: 8,
    maxLength: 8,
  },
  "3104": { name: "Titel", minLength: 0, maxLength: 20 },
  "3105": {
    name: "Versichertennummer",
    minLength: 6,
    maxLength: 12,
  },
  "3107": { name: "Straße", minLength: 0, maxLength: 46 },
  "3108": {
    name: "Versichertenart",
    minLength: 1,
    maxLength: 1,
  },
  "3109": {
    name: "Hausnummer",
    minLength: 0,
    maxLength: 9,
  },
  "3110": { name: "Geschlecht", minLength: 1, maxLength: 1 },
  "3112": { name: "PLZ", minLength: 0, maxLength: 10 },
  "3113": { name: "Ort", minLength: 0, maxLength: 40 },
  "3114": {
    name: "Wohnsitzlaendercode",
    minLength: 0,
    maxLength: 3,
  },
  "3115": {
    name: "Anschriftenzusatz",
    minLength: 0,
    maxLength: 40,
  },
  "3116": { name: "WOP", minLength: 2, maxLength: 2 },
  "3119": {
    name: "Versicherten_ID",
    minLength: 10,
    maxLength: 10,
  },
  "3120": { name: "Vorsatzwort", minLength: 0, maxLength: 20 },
  "3121": {
    name: "PostfachPLZ",
    minLength: 0,
    maxLength: 10,
  },
  "3122": {
    name: "PostfachOrt",
    minLength: 0,
    maxLength: 40,
  },
  "3123": { name: "Postfach", minLength: 0, maxLength: 8 },
  "3124": {
    name: "PostfachWohnsitzlaendercode",
    minLength: 0,
    maxLength: 3,
  },
  "3673": {
    name: "Dauerdiagnose (ICDCode)",
    minLength: 3,
    maxLength: 6,
  },
  "3674": {
    name: "Diagnosensicherheit Dauerdiagnose",
    minLength: 1,
    maxLength: 1,
  },
  "3675": {
    name: "Seitenlokalisation Dauerdiagnose",
    minLength: 1,
    maxLength: 1,
  },
  "3676": {
    name: "Diagnosenerläuterung Dauerdiagnose",
    minLength: 0,
    maxLength: 60,
  },
  "3677": {
    name: "Diagnosenausnahmetatbestand Dauerdiagnosen",
    minLength: 0,
    maxLength: 60,
  },
  "4101": { name: "Quartal", minLength: 5, maxLength: 5 },
  "4102": {
    name: "Ausstellungsdatum",
    minLength: 8,
    maxLength: 8,
  },
  "4103": {
    name: "TSVG Vermittlungs-/Kontaktart",
    minLength: 1,
    maxLength: 1,
  },
  "4104": {
    name: "Abrechnungs-VKNR",
    minLength: 5,
    maxLength: 5,
  },
  "4105": {
    name: "Ergänzende Informationen zur TSVG Vermittlungs-/Kontaktart",
    minLength: 0,
    maxLength: 60,
  },
  "4106": {
    name: "Kostenträger-Abrechnungsbereich (KTAB)",
    minLength: 2,
    maxLength: 2,
  },
  "4108": {
    name: "Zulassungsnummer (mobiles Lesegerät)",
    minLength: 0,
    maxLength: 40,
  },
  "4109": {
    name: "letzter Einlesetag der Versichertenkarte im Quartal",
    minLength: 8,
    maxLength: 8,
  },
  "4110": {
    name: "VersicherungsschutzEnde",
    minLength: 8,
    maxLength: 8,
  },
  "4111": {
    name: "Kostentraegerkennung",
    minLength: 9,
    maxLength: 9,
  },
  "4114": {
    name: "Vermittlungscode",
    minLength: 12,
    maxLength: 12,
  },
  "4115": {
    name: "Datum der Kontaktaufnahme bei der TSS",
    minLength: 8,
    maxLength: 8,
  },
  "4121": {
    name: "Gebührenordnung",
    minLength: 1,
    maxLength: 1,
  },
  "4122": {
    name: "Abrechnungsgebiet",
    minLength: 2,
    maxLength: 2,
  },
  "4123": {
    name: "Personenkreis / Untersuchungskategorie",
    minLength: 2,
    maxLength: 2,
  },
  "4124": {
    name: "SKT-Zusatzangaben",
    minLength: 5,
    maxLength: 60,
  },
  "4125": {
    name: "Gültigkeitszeitraum von ... bis ... ",
    minLength: 16,
    maxLength: 16,
  },
  "4126": { name: "SKT-Bemerkungen" },
  "4131": {
    name: "BesonderePersonengruppe",
    minLength: 2,
    maxLength: 2,
  },
  "4132": {
    name: "DMP_Kennzeichnung",
    minLength: 2,
    maxLength: 2,
  },
  "4133": {
    name: "VersicherungsschutzBeginn",
    minLength: 8,
    maxLength: 8,
  },
  "4134": {
    name: "Kostentraegername",
    minLength: 0,
    maxLength: 45,
  },
  "4202": {
    name: "Unfall, Unfallfolgen",
    minLength: 1,
    maxLength: 1,
  },
  "4204": {
    name: "eingeschränkter Leistungsanspruch gemäß §16 Abs. 3a SGB V",
    minLength: 1,
    maxLength: 1,
  },
  "4205": { name: "Auftrag", minLength: 0, maxLength: 60 },
  "4206": {
    name: "Mutm. Tag der Entbindung",
    minLength: 8,
    maxLength: 8,
  },
  "4207": {
    name: "Diagnose/Verdachtsdiagnose",
    minLength: 0,
    maxLength: 60,
  },
  "4208": {
    name: "Befund/Medikation",
    minLength: 0,
    maxLength: 60,
  },
  "4209": {
    name: "Zusätzliche Angaben zu Untersuchungen",
    minLength: 0,
    maxLength: 60,
  },
  "4217": {
    name: "(N)BSNR des Erstveranlassers",
    minLength: 9,
    maxLength: 9,
  },
  "4218": {
    name: "(N)BSNR des Überweisers",
    minLength: 9,
    maxLength: 9,
  },
  "4219": {
    name: "Überweisung von anderen Ärzten",
    minLength: 0,
    maxLength: 60,
  },
  "4220": {
    name: "Überweisung an",
    minLength: 0,
    maxLength: 60,
  },
  "4221": {
    name: "Kurativ / Präventiv / ESS / bei belegärztlicher Behandlung",
    minLength: 1,
    maxLength: 1,
  },
  "4225": {
    name: "ASV-Teamnummer des Erstveranlassers",
    minLength: 9,
    maxLength: 9,
  },
  "4226": {
    name: "ASV-Teamnummer des Überweisers",
    minLength: 9,
    maxLength: 9,
  },
  "4229": {
    name: "Ausnahmeindikation",
    minLength: 5,
    maxLength: 5,
  },
  "4233": {
    name: "Stationäre Behandlung von... bis...",
    minLength: 16,
    maxLength: 16,
  },
  "4234": {
    name: "anerkannte Psychotherapie",
    minLength: 1,
    maxLength: 1,
  },
  "4235": {
    name: "Datum des Anerkennungsbescheides",
    minLength: 8,
    maxLength: 8,
  },
  "4236": {
    name: "Abklärung somatischer Ursachen vor Aufnahme einer Psychotherapie",
    minLength: 1,
    maxLength: 1,
  },
  "4239": {
    name: "Scheinuntergruppe",
    minLength: 2,
    maxLength: 2,
  },
  "4241": {
    name: "Lebenslange Arztnummer (LANR) des Erstveranlassers",
    minLength: 9,
    maxLength: 9,
  },
  "4242": {
    name: "Lebenslange Arztnummer des Überweisers",
    minLength: 9,
    maxLength: 9,
  },
  "4243": {
    name: "Weiterbehandelnder Arzt",
    minLength: 0,
    maxLength: 60,
  },
  "4244": {
    name: "Bewilligte Leistung",
    minLength: 5,
    maxLength: 6,
  },
  "4245": {
    name: "Anzahl bewilligter Leistungen",
    minLength: 0,
    maxLength: 3,
  },
  "4246": {
    name: "Anzahl abgerechneter Leistungen",
    minLength: 0,
    maxLength: 3,
  },
  "4247": {
    name: "Antragsdatum (des Anerkennungsbescheides)",
    minLength: 8,
    maxLength: 8,
  },
  "4248": {
    name: "Pseudo-LANR (für Krankenhausärzte im Rahmen der ASV-Abrechnung) des Erstveranlassers",
    minLength: 9,
    maxLength: 9,
  },
  "4249": {
    name: "Pseudo-LANR (für Krankenhausärzte im Rahmen der ASV-Abrechnung) des Überweisers",
    minLength: 9,
    maxLength: 9,
  },
  "4250": {
    name: "Kombinationsbehandlung aus Einzel- und Gruppentherapie",
    minLength: 1,
    maxLength: 1,
  },
  "4251": {
    name: "Durchführungsart der Kombinationsbehandlung",
    minLength: 1,
    maxLength: 1,
  },
  "4252": {
    name: "Gesamtanzahl bewilligter Therapieeinheiten für den Versicherten",
    minLength: 0,
    maxLength: 3,
  },
  "4253": {
    name: "Bewilligte GOP für den Versicherten",
    minLength: 5,
    maxLength: 6,
  },
  "4254": {
    name: "Anzahl der abgerechneten GOPen für den Versicherten",
    minLength: 0,
    maxLength: 3,
  },
  "4255": {
    name: "Gesamtanzahl bewilligter Therapieeinheiten für die Bezugsperson",
    minLength: 0,
    maxLength: 3,
  },
  "4256": {
    name: "Bewilligte GOP für die Bezugsperson",
    minLength: 5,
    maxLength: 6,
  },
  "4257": {
    name: "Anzahl der abgerechneten GOPen für die Bezugsperson",
    minLength: 0,
    maxLength: 3,
  },
  "4299": {
    name: "Lebenslange Arztnummer (LANR) des Vertragspsychotherapeuten",
    minLength: 9,
    maxLength: 9,
  },
  "5000": {
    name: "Leistungstag",
    minLength: 8,
    maxLength: 8,
  },
  "5001": {
    name: "Gebührennummer (GNR)",
    minLength: 0,
    maxLength: 9,
  },
  "5002": {
    name: "Art der Untersuchung",
    minLength: 0,
    maxLength: 60,
  },
  "5003": {
    name: "(N)BSNR des vermittelten Facharztes",
    minLength: 9,
    maxLength: 9,
  },
  "5005": {
    name: "Multiplikator",
    minLength: 3,
    maxLength: 3,
  },
  "5006": { name: "Um-Uhrzeit", minLength: 4, maxLength: 4 },
  "5008": { name: "DKM", minLength: 0, maxLength: 3 },
  "5009": {
    name: "freier Begründungstext",
    minLength: 0,
    maxLength: 60,
  },
  "5011": {
    name: "Sachkosten-Bezeichnung",
    minLength: 0,
    maxLength: 60,
  },
  "5012": {
    name: "Sachkosten / Materialkosten in Cent",
    minLength: 0,
    maxLength: 10,
  },
  "5013": {
    name: "Prozent der Leistung",
    minLength: 3,
    maxLength: 3,
  },
  "5015": { name: "Organ", minLength: 0, maxLength: 60 },
  "5016": {
    name: "Name des Arztes",
    minLength: 0,
    maxLength: 60,
  },
  "5017": {
    name: "Besuchsort bei Hausbesuchen",
    minLength: 0,
    maxLength: 60,
  },
  "5018": {
    name: "Zone bei Besuchen",
    minLength: 2,
    maxLength: 2,
  },
  "5019": {
    name: "Erbringungsort / Standort des Gerätes",
    minLength: 0,
    maxLength: 60,
  },
  "5020": {
    name: "Wiederholungsuntersuchung",
    minLength: 1,
    maxLength: 1,
  },
  "5021": {
    name: "Jahr der letzten Krebsfrüherkennungs-untersuchung",
    minLength: 4,
    maxLength: 4,
  },
  "5023": {
    name: "GO-Nummern-Zusatz",
    minLength: 1,
    maxLength: 1,
  },
  "5024": {
    name: "GNR-Zusatzkennzeichen für poststationär erbrachte Leistungen",
    minLength: 1,
    maxLength: 1,
  },
  "5025": {
    name: "Aufnahmedatum",
    minLength: 8,
    maxLength: 8,
  },
  "5026": {
    name: "Entlassungsdatum",
    minLength: 8,
    maxLength: 8,
  },
  "5034": { name: "OP-Datum", minLength: 8, maxLength: 8 },
  "5035": { name: "OP-Schlüssel", minLength: 0, maxLength: 8 },
  "5036": {
    name: "GNR als Begründung",
    minLength: 5,
    maxLength: 6,
  },
  "5037": {
    name: "Gesamt-Schnitt-Naht-Zeit (Minuten)",
    minLength: 0,
    maxLength: 3,
  },
  "5038": {
    name: "Komplikation",
    minLength: 0,
    maxLength: 60,
  },
  "5040": {
    name: "Patientennummer (EDV) des FEK-Bogens oder der eDokumentation Hautkrebs-Screening",
    minLength: 0,
    maxLength: 8,
  },
  "5041": {
    name: "Seitenlokalisation OPS",
    minLength: 1,
    maxLength: 1,
  },
  "5042": {
    name: "Mengenangabe Kontrast-/Arzneimittel",
    minLength: 0,
    maxLength: 5,
  },
  "5043": {
    name: "Maßeinheit Kontrast-/Arzneimittel",
    minLength: 1,
    maxLength: 1,
  },
  "5070": {
    name: "OMIM-G-Kode des untersuchten Gens",
    minLength: 6,
    maxLength: 6,
  },
  "5071": {
    name: "OMIM-P-Kode (Art der Erkrankung)",
    minLength: 6,
    maxLength: 6,
  },
  "5072": { name: "Gen-Name", minLength: 0, maxLength: 60 },
  "5073": {
    name: "Art der Erkrankung",
    minLength: 0,
    maxLength: 60,
  },
  "5074": {
    name: "Name Hersteller/ Lieferant",
    minLength: 0,
    maxLength: 60,
  },
  "5075": {
    name: "Artikel-/ Modellnummer",
    minLength: 0,
    maxLength: 60,
  },
  "5098": {
    name: "(N)BSNR des Ortes der Leistungserbringung",
    minLength: 9,
    maxLength: 9,
  },
  "5099": {
    name: "Lebenslange Arztnummer (LANR) des Vertragsarztes/Vertragspsychotherapeuten",
    minLength: 9,
    maxLength: 9,
  },
  "5100": {
    name: "ASV-Teamnummer des Vertragsarztes",
    minLength: 9,
    maxLength: 9,
  },
  "5101": {
    name: "Pseudo-LANR (für Krankenhausärzte im Rahmen der ASV-Abrechnung) des LE",
    minLength: 9,
    maxLength: 9,
  },
  "5102": {
    name: "Krankenhaus-IK (im Rahmen der ASV-Abrechnung)",
    minLength: 9,
    maxLength: 9,
  },
  "6001": { name: "ICD-Code", minLength: 3, maxLength: 6 },
  "6003": {
    name: "Diagnosensicherheit",
    minLength: 1,
    maxLength: 1,
  },
  "6004": {
    name: "Seitenlokalisation",
    minLength: 1,
    maxLength: 1,
  },
  "6006": {
    name: "Diagnosenerläuterung",
    minLength: 0,
    maxLength: 60,
  },
  "6008": {
    name: "Diagnosenausnahmetatbestand",
    minLength: 0,
    maxLength: 60,
  },
  "8000": { name: "Satzart", minLength: 4, maxLength: 4 },
  "9102": { name: "Empfänger", minLength: 2, maxLength: 2 },
  "9103": {
    name: "Erstellungsdatum",
    minLength: 8,
    maxLength: 8,
  },
  "9106": {
    name: "verwendeter Zeichensatz",
    minLength: 1,
    maxLength: 1,
  },
  "9111": { name: "Gültigkeitsquartal", minLength: 5, maxLength: 5 },
  "9115": {
    name: "Erstellungsdatum ADT-Datenpaket",
    minLength: 8,
    maxLength: 8,
  },
  "9132": {
    name: "enthaltene Datenpakete dieser Datei",
    minLength: 1,
    maxLength: 1,
  },
  "9204": {
    name: "Abrechnungsquartal",
    minLength: 5,
    maxLength: 5,
  },
  "9208": {
    name: "Gesamtzahl der Betriebsstättendatensätze",
    minLength: 0,
    maxLength: 11,
  },
  "9212": {
    name: "Version der Satzbeschreibung",
    minLength: 0,
    maxLength: 11,
  },
  "9222": { name: "ADT-Referenzversion", minLength: 0, maxLength: 11 },
  "9250": {
    name: "AVWG-Prüfnummer der AVS",
    minLength: 15,
    maxLength: 17,
  },
  "9251": {
    name: "HMV-Prüfnummer",
    minLength: 15,
    maxLength: 17,
  },
  "9260": {
    name: "Anzahl Teilabrechnungen",
    minLength: 2,
    maxLength: 2,
  },
  "9261": {
    name: "Abrechnungsteil x von y",
    minLength: 2,
    maxLength: 2,
  },
  "9901": {
    name: "Systeminterner Parameter",
    minLength: 0,
    maxLength: 60,
  },
};
