export const fieldsCatalog: Record<
  string,
  {
    name: string;
    min_length?: number;
    max_length?: number;
  }
> = {
  "0102": {
    name: "Softwareverantwortlicher (SV)",
    min_length: 0,
    max_length: 60,
  },
  "0103": { name: "Software", min_length: 0, max_length: 60 },
  "0105": {
    name: "KBV-Prüfnummer",
    min_length: 15,
    max_length: 17,
  },
  "0111": {
    name: "Email-Adresse des SV",
    min_length: 0,
    max_length: 60,
  },
  "0121": {
    name: "Straße des SV",
    min_length: 0,
    max_length: 60,
  },
  "0122": {
    name: "PLZ des SV",
    min_length: 0,
    max_length: 7,
  },
  "0123": { name: "Ort des SV", min_length: 0, max_length: 60 },
  "0124": {
    name: "Telefonnummer des SV",
    min_length: 0,
    max_length: 60,
  },
  "0125": {
    name: "Telefaxnummer des SV",
    min_length: 0,
    max_length: 60,
  },
  "0126": {
    name: "Regionaler Systembetreuer (SB)",
    min_length: 0,
    max_length: 60,
  },
  "0127": {
    name: "Straße des SB",
    min_length: 0,
    max_length: 60,
  },
  "0128": {
    name: "PLZ des SB",
    min_length: 0,
    max_length: 7,
  },
  "0129": { name: "Ort des SB", min_length: 0, max_length: 60 },
  "0130": {
    name: "Telefonnummer des SB",
    min_length: 0,
    max_length: 60,
  },
  "0131": {
    name: "Telefaxnummer des SB",
    min_length: 0,
    max_length: 60,
  },
  "0132": {
    name: "Release-Stand der Software",
    min_length: 0,
    max_length: 60,
  },
  "0201": {
    name: "Betriebs- (BSNR) oder Nebenbetriebsstättennummer (NBSNR)",
    min_length: 9,
    max_length: 9,
  },
  "0203": {
    name: "(N)BSNR-/KrankenhausBezeichnung",
    min_length: 0,
    max_length: 60,
  },
  "0205": {
    name: "Straße der (N)BSNR-/Krankenhaus- Adresse",
    min_length: 0,
    max_length: 60,
  },
  "0208": {
    name: "Telefonnummer",
    min_length: 0,
    max_length: 60,
  },
  "0209": {
    name: "Telefaxnummer",
    min_length: 0,
    max_length: 60,
  },
  "0211": {
    name: "Arztname oder Erläuterung",
    min_length: 0,
    max_length: 60,
  },
  "0212": {
    name: "Lebenslange Arztnummer (LANR)",
    min_length: 9,
    max_length: 9,
  },
  "0213": {
    name: "Krankenhaus-IK (im Rahmen der ASV-Abrechnung)",
    min_length: 9,
    max_length: 9,
  },
  "0214": { name: "KV-Bereich", min_length: 2, max_length: 2 },
  "0215": {
    name: "PLZ der (N)BSNR-/Krankenhaus-Adresse",
    min_length: 0,
    max_length: 7,
  },
  "0216": {
    name: "Ort der (N)BSNR-/Krankenhaus-Adresse",
    min_length: 0,
    max_length: 60,
  },
  "0218": {
    name: "E-Mail der Betriebsstätte/Praxis/Krankenhaus",
    min_length: 0,
    max_length: 60,
  },
  "0219": {
    name: "Titel des Arztes",
    min_length: 0,
    max_length: 20,
  },
  "0220": {
    name: "Arztvorname",
    min_length: 0,
    max_length: 45,
  },
  "0221": {
    name: "Namenszusatz des Arztes",
    min_length: 0,
    max_length: 20,
  },
  "0222": {
    name: "ASV-Teamnummer",
    min_length: 9,
    max_length: 9,
  },
  "0223": {
    name: "Pseudo-LANR für Krankenhausärzte im Rahmen der ASV-Abrechnung",
    min_length: 9,
    max_length: 9,
  },
  "0224": {
    name: "Produkttypversion des Konnektors",
    min_length: 0,
    max_length: 20,
  },
  "0300": {
    name: "Abrechnung von (zertifikatspflichtigen) Laborleistungen",
    min_length: 1,
    max_length: 1,
  },
  "0301": {
    name: "pnSD/uu-Analysen",
    min_length: 1,
    max_length: 1,
  },
  "0302": {
    name: "Gerätetyp",
    min_length: 0,
    max_length: 60,
  },
  "0303": {
    name: "Hersteller",
    min_length: 0,
    max_length: 60,
  },
  "0304": { name: "Analyt-ID", min_length: 3, max_length: 3 },
  "0305": {
    name: "RV-Zertifikat",
    min_length: 1,
    max_length: 1,
  },
  "3000": {
    name: "Patientennummer",
    min_length: 0,
    max_length: 20,
  },
  "3003": {
    name: "Schein-ID",
    min_length: 0,
    max_length: 60,
  },
  "3006": {
    name: "CDM Version",
    min_length: 5,
    max_length: 11,
  },
  "3010": {
    name: "Datum und Uhrzeit der Onlineprüfung und -aktualisierung (Timestamp)",
    min_length: 14,
    max_length: 14,
  },
  "3011": {
    name: "Ergebnis der Onlineprüfung und -aktualisierung",
    min_length: 1,
    max_length: 1,
  },
  "3012": {
    name: "Error-Code",
    min_length: 0,
    max_length: 5,
  },
  "3013": {
    name: "Prüfziffer des Fachdienstes",
    min_length: 0,
    max_length: 88,
  },
  "3100": {
    name: "Namenszusatz",
    min_length: 0,
    max_length: 20,
  },
  "3101": { name: "Name", min_length: 0, max_length: 45 },
  "3102": { name: "Vorname", min_length: 0, max_length: 45 },
  "3103": {
    name: "Geburtsdatum",
    min_length: 8,
    max_length: 8,
  },
  "3104": { name: "Titel", min_length: 0, max_length: 20 },
  "3105": {
    name: "Versichertennummer",
    min_length: 6,
    max_length: 12,
  },
  "3107": { name: "Straße", min_length: 0, max_length: 46 },
  "3108": {
    name: "Versichertenart",
    min_length: 1,
    max_length: 1,
  },
  "3109": {
    name: "Hausnummer",
    min_length: 0,
    max_length: 9,
  },
  "3110": { name: "Geschlecht", min_length: 1, max_length: 1 },
  "3112": { name: "PLZ", min_length: 0, max_length: 10 },
  "3113": { name: "Ort", min_length: 0, max_length: 40 },
  "3114": {
    name: "Wohnsitzlaendercode",
    min_length: 0,
    max_length: 3,
  },
  "3115": {
    name: "Anschriftenzusatz",
    min_length: 0,
    max_length: 40,
  },
  "3116": { name: "WOP", min_length: 2, max_length: 2 },
  "3119": {
    name: "Versicherten_ID",
    min_length: 10,
    max_length: 10,
  },
  "3120": { name: "Vorsatzwort", min_length: 0, max_length: 20 },
  "3121": {
    name: "PostfachPLZ",
    min_length: 0,
    max_length: 10,
  },
  "3122": {
    name: "PostfachOrt",
    min_length: 0,
    max_length: 40,
  },
  "3123": { name: "Postfach", min_length: 0, max_length: 8 },
  "3124": {
    name: "PostfachWohnsitzlaendercode",
    min_length: 0,
    max_length: 3,
  },
  "3673": {
    name: "Dauerdiagnose (ICDCode)",
    min_length: 3,
    max_length: 6,
  },
  "3674": {
    name: "Diagnosensicherheit Dauerdiagnose",
    min_length: 1,
    max_length: 1,
  },
  "3675": {
    name: "Seitenlokalisation Dauerdiagnose",
    min_length: 1,
    max_length: 1,
  },
  "3676": {
    name: "Diagnosenerläuterung Dauerdiagnose",
    min_length: 0,
    max_length: 60,
  },
  "3677": {
    name: "Diagnosenausnahmetatbestand Dauerdiagnosen",
    min_length: 0,
    max_length: 60,
  },
  "4101": { name: "Quartal", min_length: 5, max_length: 5 },
  "4102": {
    name: "Ausstellungsdatum",
    min_length: 8,
    max_length: 8,
  },
  "4103": {
    name: "TSVG Vermittlungs-/Kontaktart",
    min_length: 1,
    max_length: 1,
  },
  "4104": {
    name: "Abrechnungs-VKNR",
    min_length: 5,
    max_length: 5,
  },
  "4105": {
    name: "Ergänzende Informationen zur TSVG Vermittlungs-/Kontaktart",
    min_length: 0,
    max_length: 60,
  },
  "4106": {
    name: "Kostenträger-Abrechnungsbereich (KTAB)",
    min_length: 2,
    max_length: 2,
  },
  "4108": {
    name: "Zulassungsnummer (mobiles Lesegerät)",
    min_length: 0,
    max_length: 40,
  },
  "4109": {
    name: "letzter Einlesetag der Versichertenkarte im Quartal",
    min_length: 8,
    max_length: 8,
  },
  "4110": {
    name: "VersicherungsschutzEnde",
    min_length: 8,
    max_length: 8,
  },
  "4111": {
    name: "Kostentraegerkennung",
    min_length: 9,
    max_length: 9,
  },
  "4114": {
    name: "Vermittlungscode",
    min_length: 12,
    max_length: 12,
  },
  "4115": {
    name: "Datum der Kontaktaufnahme bei der TSS",
    min_length: 8,
    max_length: 8,
  },
  "4121": {
    name: "Gebührenordnung",
    min_length: 1,
    max_length: 1,
  },
  "4122": {
    name: "Abrechnungsgebiet",
    min_length: 2,
    max_length: 2,
  },
  "4123": {
    name: "Personenkreis / Untersuchungskategorie",
    min_length: 2,
    max_length: 2,
  },
  "4124": {
    name: "SKT-Zusatzangaben",
    min_length: 5,
    max_length: 60,
  },
  "4125": {
    name: "Gültigkeitszeitraum von ... bis ... ",
    min_length: 16,
    max_length: 16,
  },
  "4126": { name: "SKT-Bemerkungen" },
  "4131": {
    name: "BesonderePersonengruppe",
    min_length: 2,
    max_length: 2,
  },
  "4132": {
    name: "DMP_Kennzeichnung",
    min_length: 2,
    max_length: 2,
  },
  "4133": {
    name: "VersicherungsschutzBeginn",
    min_length: 8,
    max_length: 8,
  },
  "4134": {
    name: "Kostentraegername",
    min_length: 0,
    max_length: 45,
  },
  "4202": {
    name: "Unfall, Unfallfolgen",
    min_length: 1,
    max_length: 1,
  },
  "4204": {
    name: "eingeschränkter Leistungsanspruch gemäß §16 Abs. 3a SGB V",
    min_length: 1,
    max_length: 1,
  },
  "4205": { name: "Auftrag", min_length: 0, max_length: 60 },
  "4206": {
    name: "Mutm. Tag der Entbindung",
    min_length: 8,
    max_length: 8,
  },
  "4207": {
    name: "Diagnose/Verdachtsdiagnose",
    min_length: 0,
    max_length: 60,
  },
  "4208": {
    name: "Befund/Medikation",
    min_length: 0,
    max_length: 60,
  },
  "4209": {
    name: "Zusätzliche Angaben zu Untersuchungen",
    min_length: 0,
    max_length: 60,
  },
  "4217": {
    name: "(N)BSNR des Erstveranlassers",
    min_length: 9,
    max_length: 9,
  },
  "4218": {
    name: "(N)BSNR des Überweisers",
    min_length: 9,
    max_length: 9,
  },
  "4219": {
    name: "Überweisung von anderen Ärzten",
    min_length: 0,
    max_length: 60,
  },
  "4220": {
    name: "Überweisung an",
    min_length: 0,
    max_length: 60,
  },
  "4221": {
    name: "Kurativ / Präventiv / ESS / bei belegärztlicher Behandlung",
    min_length: 1,
    max_length: 1,
  },
  "4225": {
    name: "ASV-Teamnummer des Erstveranlassers",
    min_length: 9,
    max_length: 9,
  },
  "4226": {
    name: "ASV-Teamnummer des Überweisers",
    min_length: 9,
    max_length: 9,
  },
  "4229": {
    name: "Ausnahmeindikation",
    min_length: 5,
    max_length: 5,
  },
  "4233": {
    name: "Stationäre Behandlung von... bis...",
    min_length: 16,
    max_length: 16,
  },
  "4234": {
    name: "anerkannte Psychotherapie",
    min_length: 1,
    max_length: 1,
  },
  "4235": {
    name: "Datum des Anerkennungsbescheides",
    min_length: 8,
    max_length: 8,
  },
  "4236": {
    name: "Abklärung somatischer Ursachen vor Aufnahme einer Psychotherapie",
    min_length: 1,
    max_length: 1,
  },
  "4239": {
    name: "Scheinuntergruppe",
    min_length: 2,
    max_length: 2,
  },
  "4241": {
    name: "Lebenslange Arztnummer (LANR) des Erstveranlassers",
    min_length: 9,
    max_length: 9,
  },
  "4242": {
    name: "Lebenslange Arztnummer des Überweisers",
    min_length: 9,
    max_length: 9,
  },
  "4243": {
    name: "Weiterbehandelnder Arzt",
    min_length: 0,
    max_length: 60,
  },
  "4244": {
    name: "Bewilligte Leistung",
    min_length: 5,
    max_length: 6,
  },
  "4245": {
    name: "Anzahl bewilligter Leistungen",
    min_length: 0,
    max_length: 3,
  },
  "4246": {
    name: "Anzahl abgerechneter Leistungen",
    min_length: 0,
    max_length: 3,
  },
  "4247": {
    name: "Antragsdatum (des Anerkennungsbescheides)",
    min_length: 8,
    max_length: 8,
  },
  "4248": {
    name: "Pseudo-LANR (für Krankenhausärzte im Rahmen der ASV-Abrechnung) des Erstveranlassers",
    min_length: 9,
    max_length: 9,
  },
  "4249": {
    name: "Pseudo-LANR (für Krankenhausärzte im Rahmen der ASV-Abrechnung) des Überweisers",
    min_length: 9,
    max_length: 9,
  },
  "4250": {
    name: "Kombinationsbehandlung aus Einzel- und Gruppentherapie",
    min_length: 1,
    max_length: 1,
  },
  "4251": {
    name: "Durchführungsart der Kombinationsbehandlung",
    min_length: 1,
    max_length: 1,
  },
  "4252": {
    name: "Gesamtanzahl bewilligter Therapieeinheiten für den Versicherten",
    min_length: 0,
    max_length: 3,
  },
  "4253": {
    name: "Bewilligte GOP für den Versicherten",
    min_length: 5,
    max_length: 6,
  },
  "4254": {
    name: "Anzahl der abgerechneten GOPen für den Versicherten",
    min_length: 0,
    max_length: 3,
  },
  "4255": {
    name: "Gesamtanzahl bewilligter Therapieeinheiten für die Bezugsperson",
    min_length: 0,
    max_length: 3,
  },
  "4256": {
    name: "Bewilligte GOP für die Bezugsperson",
    min_length: 5,
    max_length: 6,
  },
  "4257": {
    name: "Anzahl der abgerechneten GOPen für die Bezugsperson",
    min_length: 0,
    max_length: 3,
  },
  "4299": {
    name: "Lebenslange Arztnummer (LANR) des Vertragspsychotherapeuten",
    min_length: 9,
    max_length: 9,
  },
  "5000": {
    name: "Leistungstag",
    min_length: 8,
    max_length: 8,
  },
  "5001": {
    name: "Gebührennummer (GNR)",
    min_length: 0,
    max_length: 9,
  },
  "5002": {
    name: "Art der Untersuchung",
    min_length: 0,
    max_length: 60,
  },
  "5003": {
    name: "(N)BSNR des vermittelten Facharztes",
    min_length: 9,
    max_length: 9,
  },
  "5005": {
    name: "Multiplikator",
    min_length: 3,
    max_length: 3,
  },
  "5006": { name: "Um-Uhrzeit", min_length: 4, max_length: 4 },
  "5008": { name: "DKM", min_length: 0, max_length: 3 },
  "5009": {
    name: "freier Begründungstext",
    min_length: 0,
    max_length: 60,
  },
  "5011": {
    name: "Sachkosten-Bezeichnung",
    min_length: 0,
    max_length: 60,
  },
  "5012": {
    name: "Sachkosten / Materialkosten in Cent",
    min_length: 0,
    max_length: 10,
  },
  "5013": {
    name: "Prozent der Leistung",
    min_length: 3,
    max_length: 3,
  },
  "5015": { name: "Organ", min_length: 0, max_length: 60 },
  "5016": {
    name: "Name des Arztes",
    min_length: 0,
    max_length: 60,
  },
  "5017": {
    name: "Besuchsort bei Hausbesuchen",
    min_length: 0,
    max_length: 60,
  },
  "5018": {
    name: "Zone bei Besuchen",
    min_length: 2,
    max_length: 2,
  },
  "5019": {
    name: "Erbringungsort / Standort des Gerätes",
    min_length: 0,
    max_length: 60,
  },
  "5020": {
    name: "Wiederholungsuntersuchung",
    min_length: 1,
    max_length: 1,
  },
  "5021": {
    name: "Jahr der letzten Krebsfrüherkennungs-untersuchung",
    min_length: 4,
    max_length: 4,
  },
  "5023": {
    name: "GO-Nummern-Zusatz",
    min_length: 1,
    max_length: 1,
  },
  "5024": {
    name: "GNR-Zusatzkennzeichen für poststationär erbrachte Leistungen",
    min_length: 1,
    max_length: 1,
  },
  "5025": {
    name: "Aufnahmedatum",
    min_length: 8,
    max_length: 8,
  },
  "5026": {
    name: "Entlassungsdatum",
    min_length: 8,
    max_length: 8,
  },
  "5034": { name: "OP-Datum", min_length: 8, max_length: 8 },
  "5035": { name: "OP-Schlüssel", min_length: 0, max_length: 8 },
  "5036": {
    name: "GNR als Begründung",
    min_length: 5,
    max_length: 6,
  },
  "5037": {
    name: "Gesamt-Schnitt-Naht-Zeit (Minuten)",
    min_length: 0,
    max_length: 3,
  },
  "5038": {
    name: "Komplikation",
    min_length: 0,
    max_length: 60,
  },
  "5040": {
    name: "Patientennummer (EDV) des FEK-Bogens oder der eDokumentation Hautkrebs-Screening",
    min_length: 0,
    max_length: 8,
  },
  "5041": {
    name: "Seitenlokalisation OPS",
    min_length: 1,
    max_length: 1,
  },
  "5042": {
    name: "Mengenangabe Kontrast-/Arzneimittel",
    min_length: 0,
    max_length: 5,
  },
  "5043": {
    name: "Maßeinheit Kontrast-/Arzneimittel",
    min_length: 1,
    max_length: 1,
  },
  "5070": {
    name: "OMIM-G-Kode des untersuchten Gens",
    min_length: 6,
    max_length: 6,
  },
  "5071": {
    name: "OMIM-P-Kode (Art der Erkrankung)",
    min_length: 6,
    max_length: 6,
  },
  "5072": { name: "Gen-Name", min_length: 0, max_length: 60 },
  "5073": {
    name: "Art der Erkrankung",
    min_length: 0,
    max_length: 60,
  },
  "5074": {
    name: "Name Hersteller/ Lieferant",
    min_length: 0,
    max_length: 60,
  },
  "5075": {
    name: "Artikel-/ Modellnummer",
    min_length: 0,
    max_length: 60,
  },
  "5098": {
    name: "(N)BSNR des Ortes der Leistungserbringung",
    min_length: 9,
    max_length: 9,
  },
  "5099": {
    name: "Lebenslange Arztnummer (LANR) des Vertragsarztes/Vertragspsychotherapeuten",
    min_length: 9,
    max_length: 9,
  },
  "5100": {
    name: "ASV-Teamnummer des Vertragsarztes",
    min_length: 9,
    max_length: 9,
  },
  "5101": {
    name: "Pseudo-LANR (für Krankenhausärzte im Rahmen der ASV-Abrechnung) des LE",
    min_length: 9,
    max_length: 9,
  },
  "5102": {
    name: "Krankenhaus-IK (im Rahmen der ASV-Abrechnung)",
    min_length: 9,
    max_length: 9,
  },
  "6001": { name: "ICD-Code", min_length: 3, max_length: 6 },
  "6003": {
    name: "Diagnosensicherheit",
    min_length: 1,
    max_length: 1,
  },
  "6004": {
    name: "Seitenlokalisation",
    min_length: 1,
    max_length: 1,
  },
  "6006": {
    name: "Diagnosenerläuterung",
    min_length: 0,
    max_length: 60,
  },
  "6008": {
    name: "Diagnosenausnahmetatbestand",
    min_length: 0,
    max_length: 60,
  },
  "8000": { name: "Satzart", min_length: 4, max_length: 4 },
  "9102": { name: "Empfänger", min_length: 2, max_length: 2 },
  "9103": {
    name: "Erstellungsdatum",
    min_length: 8,
    max_length: 8,
  },
  "9106": {
    name: "verwendeter Zeichensatz",
    min_length: 1,
    max_length: 1,
  },
  "9111": { name: "Gültigkeitsquartal", min_length: 5, max_length: 5 },
  "9115": {
    name: "Erstellungsdatum ADT-Datenpaket",
    min_length: 8,
    max_length: 8,
  },
  "9132": {
    name: "enthaltene Datenpakete dieser Datei",
    min_length: 1,
    max_length: 1,
  },
  "9204": {
    name: "Abrechnungsquartal",
    min_length: 5,
    max_length: 5,
  },
  "9208": {
    name: "Gesamtzahl der Betriebsstättendatensätze",
    min_length: 0,
    max_length: 11,
  },
  "9212": {
    name: "Version der Satzbeschreibung",
    min_length: 0,
    max_length: 11,
  },
  "9222": { name: "ADT-Referenzversion", min_length: 0, max_length: 11 },
  "9250": {
    name: "AVWG-Prüfnummer der AVS",
    min_length: 15,
    max_length: 17,
  },
  "9251": {
    name: "HMV-Prüfnummer",
    min_length: 15,
    max_length: 17,
  },
  "9260": {
    name: "Anzahl Teilabrechnungen",
    min_length: 2,
    max_length: 2,
  },
  "9261": {
    name: "Abrechnungsteil x von y",
    min_length: 2,
    max_length: 2,
  },
  "9901": {
    name: "Systeminterner Parameter",
    min_length: 0,
    max_length: 60,
  },
};
