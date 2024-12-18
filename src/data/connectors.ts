export const connectors: Record<string, string> = {
  'AlienVault': `
  connector-alienvault:
    image: codesec/connector-alienvault
    environment:
      - OPENCTI_URL=http://opencti:8080
      - OPENCTI_TOKEN=\${OPENCTI_ADMIN_TOKEN}
      - CONNECTOR_ID=ChangeMe
      - CONNECTOR_NAME=AlienVault
      - CONNECTOR_SCOPE=alienvault
      - CONNECTOR_LOG_LEVEL=error
      - CONNECTOR_DURATION_PERIOD=PT30M
      - ALIENVAULT_BASE_URL=https://otx.alienvault.com
      - ALIENVAULT_API_KEY=ChangeMe
      - ALIENVAULT_TLP=White
      - ALIENVAULT_CREATE_OBSERVABLES=true
      - ALIENVAULT_CREATE_INDICATORS=true
      - ALIENVAULT_PULSE_START_TIMESTAMP=2022-05-01T00:00:00
      - ALIENVAULT_REPORT_TYPE=threat-report
      - ALIENVAULT_REPORT_STATUS=New
      - ALIENVAULT_GUESS_MALWARE=false
      - ALIENVAULT_GUESS_CVE=false
      - ALIENVAULT_EXCLUDED_PULSE_INDICATOR_TYPES=FileHash-MD5,FileHash-SHA1
      - ALIENVAULT_ENABLE_RELATIONSHIPS=true
      - ALIENVAULT_ENABLE_ATTACK_PATTERNS_INDICATES=false
      - ALIENVAULT_INTERVAL_SEC=1800
    restart: always
    depends_on:
      opencti:
        condition: service_healthy`,
  'MISP': `
  connector-misp:
    image: opencti/connector-misp:6.4.1
    environment:
      - OPENCTI_URL=http://opencti:8080
      - OPENCTI_TOKEN=\${OPENCTI_ADMIN_TOKEN}
      - CONNECTOR_ID=ChangeMe
      - CONNECTOR_NAME=MISP
      - CONNECTOR_SCOPE=misp
      - CONNECTOR_LOG_LEVEL=error
      - MISP_URL=ChangeMe
      - MISP_API_KEY=ChangeMe
      - MISP_SSL_VERIFY=false
      - MISP_CREATE_REPORTS=true
      - MISP_REPORT_CLASS=MISP Event
      - MISP_CREATE_INDICATORS=true
      - MISP_CREATE_OBSERVABLES=true
      - MISP_CREATE_OBJECT_OBSERVABLES=true
      - MISP_INTERVAL=1
    restart: always
    depends_on:
      opencti:
        condition: service_healthy`,
  'VirusTotal': `
  connector-virustotal:
    image: opencti/connector-virustotal:6.4.1
    environment:
      - OPENCTI_URL=http://opencti:8080
      - OPENCTI_TOKEN=\${OPENCTI_ADMIN_TOKEN}
      - CONNECTOR_ID=ChangeMe
      - CONNECTOR_NAME=VirusTotal
      - CONNECTOR_SCOPE=virustotal
      - CONNECTOR_LOG_LEVEL=error
      - VIRUSTOTAL_API_KEY=ChangeMe
      - VIRUSTOTAL_MAX_TLP=amber
      - VIRUSTOTAL_CREATE_OBSERVABLES=true
      - VIRUSTOTAL_INTERVAL=60
    restart: always
    depends_on:
      opencti:
        condition: service_healthy`,
  'VirusTotal Livehunt': `
  connector-virustotal-livehunt:
    image: opencti/connector-virustotal-livehunt-notifications:6.4.1
    environment:
      - OPENCTI_URL=http://opencti:8080
      - OPENCTI_TOKEN=\${OPENCTI_ADMIN_TOKEN}
      - CONNECTOR_ID=ChangeMe
      - CONNECTOR_NAME=VirusTotal Livehunt
      - CONNECTOR_SCOPE=StixFile,Indicator,Incident
      - CONNECTOR_LOG_LEVEL=error
      - VIRUSTOTAL_LIVEHUNT_NOTIFICATIONS_API_KEY=ChangeMe
      - VIRUSTOTAL_LIVEHUNT_NOTIFICATIONS_INTERVAL_SEC=300
      - VIRUSTOTAL_LIVEHUNT_NOTIFICATIONS_CREATE_ALERT=true
      - VIRUSTOTAL_LIVEHUNT_NOTIFICATIONS_EXTENSIONS=exe,dll
      - VIRUSTOTAL_LIVEHUNT_NOTIFICATIONS_MIN_FILE_SIZE=1000
      - VIRUSTOTAL_LIVEHUNT_NOTIFICATIONS_MAX_FILE_SIZE=52428800
      - VIRUSTOTAL_LIVEHUNT_NOTIFICATIONS_MAX_AGE_DAYS=3
      - VIRUSTOTAL_LIVEHUNT_NOTIFICATIONS_MIN_POSITIVES=5
      - VIRUSTOTAL_LIVEHUNT_NOTIFICATIONS_CREATE_FILE=true
      - VIRUSTOTAL_LIVEHUNT_NOTIFICATIONS_UPLOAD_ARTIFACT=false
      - VIRUSTOTAL_LIVEHUNT_NOTIFICATIONS_CREATE_YARA_RULE=true
    restart: always
    depends_on:
      opencti:
        condition: service_healthy`
};