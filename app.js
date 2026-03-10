const STORAGE_KEY = "backup-rival-radar.v5";
const TODAY = "2026-03-10";
const POSITION_OPTIONS = ["Direct", "Adjacent", "Premium", "Value"];
const BACKBLAZE_ID = "backblaze-computer-backup";

const backblazeProfile = {
  id: BACKBLAZE_ID,
  name: "Backblaze Computer Backup",
  category: "Cloud backup",
  monthlyPrice: 99,
  priceDisplay: "$99 / computer / year",
  storageModel: "Unlimited cloud backup for one computer",
  platforms: "Windows, macOS",
  segment: "Consumer",
  positioning: "Baseline",
  lastReviewed: TODAY,
  notes:
    "Simple unlimited backup is the pitch. The product is easier to understand than suite-style rivals, but it covers a narrower set of use cases.",
  pricingDetails:
    "Backblaze Computer Backup is currently $99 per year for one computer. Pricing is per device, not a pooled multi-device household account.",
  storageDetails:
    "Unlimited capacity applies to one computer and its attached external drives. It is not a shared storage pool across multiple computers.",
  retentionDetails:
    "30-day version history is the base offer. Longer retention is available through add-ons such as 1-year or forever version history.",
  restoreDetails:
    "Restore options include web download and courier restore on USB flash drive or hard drive, with refund-on-return for shipped media.",
  securityDetails:
    "Backups are encrypted in transit and at rest. The account supports two-factor authentication and an optional personal encryption key.",
  cloudSyncPosture:
    "Backblaze complements Dropbox, Google Drive, and iCloud rather than replacing them. It protects local endpoint data and attached drives, while sync tools focus on active file access and collaboration.",
  legalHold: "Supported in Computer Backup with Enterprise Control; also available in B2 object governance",
  eDiscovery: "Not publicly positioned as a separate eDiscovery workflow in Computer Backup",
  defaultRetention: "30-day version history included by default",
  retentionAddon: "1-year and forever version history available as add-ons",
  linuxSupport: "Not supported for Computer Backup",
  serverSupport: "Not supported in Computer Backup",
  bareMetalRecovery: "Not supported",
  limitations:
    "Less breadth than security-suite or enterprise-governance competitors. Linux, server, and broad admin-control use cases fall outside the core product target.",
  howWeWin:
    "Lead with simplicity, predictable annual pricing, unlimited one-computer backup, and the lower-friction restore experience for standard endpoint backup needs.",
  features: [
    "Automatic continuous backup",
    "Unlimited backup for one computer",
    "External-drive backup when drives reconnect regularly",
    "Version history options beyond the default 30 days",
    "Web download or shipped-drive restores",
  ],
  sources: [
    { label: "Backblaze pricing", url: "https://www.backblaze.com/cloud-backup/personal" },
    { label: "Backblaze features", url: "https://www.backblaze.com/cloud-backup/features" },
  ],
};

const researchedProfiles = [
  {
    aliases: ["carbonite", "carbonite safe"],
    snapshot: {
      id: createId(),
      name: "Carbonite Safe",
      category: "Cloud backup",
      monthlyPrice: 95.99,
      priceDisplay: "$95.99 / computer / year",
      storageModel: "Unlimited cloud backup for one computer",
      platforms: "Windows, macOS",
      segment: "Consumer",
      positioning: "Direct",
      lastReviewed: TODAY,
      notes:
        "Competes directly on simple computer backup, but more meaningfully splits capability across Basic, Plus, and Prime tiers.",
      pricingDetails:
        "Carbonite's one-computer annual pricing starts around $95.99 per year for Basic. More complete restore and drive coverage requires the higher Plus or Prime plans.",
      storageDetails:
        "Unlimited backup is sold per computer. External-drive backup is not included in the Basic plan and is unlocked higher in the lineup.",
      retentionDetails:
        "The product emphasizes set-it-and-forget-it backup over advanced archival controls, so the differentiation is less about deep retention tuning.",
      restoreDetails:
        "Cloud restore is standard, while Prime adds courier recovery. Video backup and external-drive protection depend on plan tier.",
      securityDetails:
        "Encrypted backup is included, and higher plans bundle Webroot-powered security features for broader endpoint protection.",
      cloudSyncPosture:
        "Carbonite is still a backup product, not a collaboration sync layer. It sits alongside Dropbox, Google Drive, and iCloud rather than replacing their day-to-day file sharing behavior.",
      legalHold: "Not supported in personal tiers",
      eDiscovery: "Not supported in personal tiers",
      defaultRetention: "Versioning available, but public personal-tier retention detail is limited",
      retentionAddon: "Not publicly positioned as an add-on menu in personal tiers",
      linuxSupport: "Not supported in Carbonite Safe personal backup",
      serverSupport: "Server backup is a separate business product",
      bareMetalRecovery: "Not publicly positioned in Carbonite Safe personal backup",
      limitations:
        "Important capabilities are split across Basic, Plus, and Prime. External-drive backup and courier recovery require moving up the lineup.",
      howWeWin:
        "Lead with cleaner packaging. Backblaze keeps unlimited backup, external-drive protection, and restore options easier to explain without forcing tier jumps for core value.",
      howWeLose:
        "Carbonite can appeal when a buyer wants tiered security add-ons and is comfortable paying more for Plus or Prime packaging.",
      features: [
        "Automatic encrypted computer backup",
        "Unlimited storage for one computer",
        "Web restore access",
        "External-drive backup in Plus and Prime",
        "Courier recovery in Prime",
      ],
      sources: [
        { label: "Carbonite features", url: "https://www.carbonite.com/personal/features/" },
        { label: "Carbonite pricing FAQ", url: "https://www.carbonite.com/faqs/carbonite-safe-pricing-adjustment/" },
      ],
    },
  },
  {
    aliases: ["idrive", "idrive personal"],
    snapshot: {
      id: createId(),
      name: "IDrive Personal",
      category: "Hybrid backup",
      monthlyPrice: 99.50,
      priceDisplay: "$99.50 / account / year",
      storageModel: "Tiered cloud pool starting at 5 TB",
      platforms: "Windows, macOS, Linux, iOS, Android",
      segment: "Consumer",
      positioning: "Value",
      lastReviewed: TODAY,
      notes:
        "Stronger as a multi-device value play than as a pure one-computer unlimited backup alternative.",
      pricingDetails:
        "IDrive Personal public pricing is about $99.50 per year for the 5 TB plan. The commercial unit is the whole account capacity, not a single protected computer.",
      storageDetails:
        "Storage is a pooled account bucket that can cover multiple computers, servers, phones, and external drives under one subscription.",
      retentionDetails:
        "Snapshots and versioning are part of the offer, which gives it a stronger archival and rollback posture than simpler consumer backup tools.",
      restoreDetails:
        "Supports web restore, standard restore workflows, and IDrive Express for physical seeding or large restores by shipped drive.",
      securityDetails:
        "Supports private-key encryption and security controls around the account, with messaging that leans toward secure multi-device backup.",
      cloudSyncPosture:
        "IDrive has more overlap with sync services than Backblaze because it includes sync and Cloud Drive features. That can help in mixed use cases, but it can also blur the line between backup and collaboration storage.",
      legalHold: "Not a core endpoint feature",
      eDiscovery: "Not a core endpoint feature",
      defaultRetention: "Snapshots plus versioning, with up to 30 previous versions commonly positioned",
      retentionAddon: "Longer retention handled in the base service, not a named retention add-on",
      linuxSupport: "Supported",
      serverSupport: "Supported, including server workloads",
      bareMetalRecovery: "Supported",
      limitations:
        "Not unlimited per computer, so the buyer has to think about pooled storage limits. The product is also denser and less turnkey for simple endpoint backup.",
      howWeWin:
        "Lead with simplicity over feature density. Backblaze is easier to deploy, easier to understand, and avoids pooled-storage management for a single-computer backup use case.",
      howWeLose:
        "IDrive is stronger when the buyer values one account across many devices, likes sync-style features, or wants broad mixed-device coverage under a pooled plan.",
      features: [
        "Multiple computers and mobile devices per account",
        "External-drive and server backup support",
        "Snapshots and file versioning",
        "Sync and Cloud Drive capabilities",
        "IDrive Express physical seed and restore service",
      ],
      sources: [
        { label: "IDrive pricing", url: "https://www.idrive.com/pricing" },
        { label: "IDrive features", url: "https://www.idrive.com/online-backup-features" },
      ],
    },
  },
  {
    aliases: ["crashplan", "crashplan professional", "crashplan endpoint"],
    snapshot: {
      id: createId(),
      name: "CrashPlan",
      category: "Endpoint backup",
      monthlyPrice: 88,
      priceDisplay: "$88 / user / year",
      storageModel: "Unlimited cloud storage per user",
      platforms: "Windows, macOS, Linux",
      segment: "SMB",
      positioning: "Premium",
      lastReviewed: TODAY,
      notes:
        "More business-oriented than Backblaze Computer Backup, with stronger admin and recovery governance for teams.",
      pricingDetails:
        "CrashPlan public SMB pricing is about $88 per user per year, so the buying unit is a business user or endpoint rather than a personal device.",
      storageDetails:
        "Unlimited storage is positioned per user or endpoint. The offer is closer to business endpoint resilience than consumer household backup.",
      retentionDetails:
        "Unlimited versioning is a major differentiator. The product is built for longer history and stronger recovery governance.",
      restoreDetails:
        "Supports self-service restore, device replacement, and recovery workflows aimed at managed endpoint operations.",
      securityDetails:
        "Ransomware recovery posture and immutable-recovery messaging are central parts of the business value proposition.",
      cloudSyncPosture:
        "CrashPlan is positioned as endpoint backup and recovery, not a sync-and-share layer. It generally complements Dropbox, Google Drive, or iCloud in business environments.",
      legalHold: "Not publicly positioned as a feature",
      eDiscovery: "Not publicly positioned as a feature",
      defaultRetention: "Unlimited version retention positioned in SMB offering",
      retentionAddon: "Not required because long retention is part of the core story",
      linuxSupport: "Supported",
      serverSupport: "Endpoint-focused, not sold as a server backup platform here",
      bareMetalRecovery: "Not publicly positioned",
      limitations:
        "Business-oriented packaging makes it a weaker fit for straightforward consumer or prosumer computer backup. Admin depth can be overkill for lightweight use cases.",
      howWeWin:
        "Lead with a cleaner personal-backup motion. Backblaze is easier for non-IT buyers to understand and purchase when the need is endpoint backup, not admin-heavy recovery governance.",
      howWeLose:
        "CrashPlan is stronger when buyers need admin controls, long retention, Linux support, and business endpoint governance.",
      features: [
        "Automatic endpoint backup",
        "Unlimited version history",
        "Immutable ransomware recovery positioning",
        "Self-service restore flows",
        "Device migration and business admin controls",
      ],
      sources: [
        { label: "CrashPlan SMB pricing", url: "https://smb.crashplan.com/smb-pricing/" },
        { label: "CrashPlan endpoint backup", url: "https://www.crashplan.com/crashplan-automatic-backups-to-the-cloud/" },
      ],
    },
  },
  {
    aliases: ["acronis", "acronis cyber protect home office", "acronis true image"],
    snapshot: {
      id: createId(),
      name: "Acronis Cyber Protect Home Office",
      category: "Cyber protection suite",
      monthlyPrice: 89.99,
      priceDisplay: "$89.99+ / device / year",
      storageModel: "Local backup plus cloud tiers on higher plans",
      platforms: "Windows, macOS, iOS, Android",
      segment: "Prosumer",
      positioning: "Adjacent",
      lastReviewed: TODAY,
      notes:
        "A broader cyber-protection suite rather than a narrow unlimited-backup product, which makes it richer but also more complex.",
      pricingDetails:
        "Annual pricing varies by plan tier and device count. Cloud backup requires higher plans than the local-backup entry tier, so the practical annual comparison point is higher than the cheapest advertised plan.",
      storageDetails:
        "Backup supports local image and file workflows broadly. Cloud capacity is bundled by tier and is not positioned as unlimited.",
      retentionDetails:
        "Image-based recovery and multi-mode backup make retention more flexible, but capacity constraints are tied to the chosen plan.",
      restoreDetails:
        "Supports full-image restore, file-level restore, disk cloning, and recovery media creation depending on plan and setup.",
      securityDetails:
        "Anti-ransomware, malware blocking, and broader cyber-protection tooling are central to the product story.",
      cloudSyncPosture:
        "Acronis overlaps more with broader endpoint-management and protection workflows than with collaboration sync tools. It still complements Dropbox, Google Drive, and iCloud more than it replaces them.",
      legalHold: "Not supported",
      eDiscovery: "Not supported",
      defaultRetention: "Policy-based and plan-dependent",
      retentionAddon: "Handled through plan and storage selection rather than a simple retention add-on",
      linuxSupport: "Not supported in Home Office endpoint lineup",
      serverSupport: "Server backup is separate from Home Office product line",
      bareMetalRecovery: "Supported through image backup and recovery media",
      limitations:
        "Cloud capacity is tiered rather than unlimited, and the product can feel more complex because backup is bundled with broader security tooling.",
      howWeWin:
        "Lead with unlimited-backup clarity and lower operational complexity. Backblaze is easier to position when the core need is reliable computer backup, not an all-in-one cyber suite.",
      howWeLose:
        "Acronis is stronger when security-suite breadth, imaging, cloning, and anti-ransomware tooling matter more than backup simplicity.",
      features: [
        "Full-image and file backup",
        "Disk cloning and recovery media",
        "Anti-ransomware protection",
        "Malware blocking",
        "Microsoft 365 and mobile backup",
      ],
      sources: [
        { label: "Acronis pricing", url: "https://www.acronis.com/en-us/products/true-image/purchasing/" },
        {
          label: "Acronis product announcement",
          url: "https://www.acronis.com/en-us/pr/2023/acronis-unveils-first-ever-ai-powered-all-in-one-cyber-protection-solution-for-consumers/",
        },
      ],
    },
  },
  {
    aliases: ["druva", "druva endpoints", "druva inSync"],
    snapshot: {
      id: createId(),
      name: "Druva Endpoints",
      category: "SaaS endpoint backup",
      monthlyPrice: 0,
      priceDisplay: "Quote-based",
      storageModel: "SaaS backup per user with cloud-managed storage",
      platforms: "Windows, macOS",
      segment: "Mid-market, Enterprise",
      positioning: "Premium",
      lastReviewed: TODAY,
      notes:
        "Enterprise-oriented endpoint data protection with a stronger security and compliance story than consumer backup products.",
      pricingDetails:
        "Pricing is quote-based per user rather than a public self-serve monthly computer plan. Public plan pages show Enterprise and Elite packaging with higher-tier security and governance features, but no public list price.",
      storageDetails:
        "Cloud-managed endpoint backup is sold as part of the SaaS service, with packaging aligned to enterprise endpoint and user protection rather than one-device personal backup.",
      retentionDetails:
        "Designed for enterprise retention, legal hold, and cyber-recovery workflows rather than lightweight personal-computer history.",
      restoreDetails:
        "Supports endpoint recovery workflows and broader managed recovery operations from the Druva cloud platform.",
      securityDetails:
        "Strong security posture includes anomaly detection, quarantine-oriented recovery flows, and governance features in higher tiers.",
      cloudSyncPosture:
        "Druva is an enterprise endpoint and SaaS data protection platform, so it often protects data around services like Google Workspace rather than acting like Dropbox or iCloud.",
      legalHold: "Supported in higher governance-oriented tiers",
      eDiscovery: "Supported through governance and investigation workflows",
      defaultRetention: "Policy-driven enterprise retention",
      retentionAddon: "Included by tier rather than sold as a simple add-on",
      linuxSupport: "Not publicly positioned for endpoint product",
      serverSupport: "Separate workload protection story outside endpoint plans",
      bareMetalRecovery: "Not publicly positioned for endpoint plans",
      limitations:
        "Quote-based enterprise packaging, stronger governance complexity, and an enterprise buying motion make it less accessible for straightforward endpoint backup deals.",
      howWeWin:
        "Lead with easier pricing and a lighter buying motion. Backblaze is simpler to explain in opportunities that do not require enterprise governance or quote-led procurement.",
      howWeLose:
        "Druva is stronger when security operations, legal hold, governance, and enterprise control are the key buying criteria.",
      features: [
        "Autonomous endpoint protection",
        "Integrated mass deployment",
        "Security Center and anomaly detection in higher tiers",
        "Curated recovery and cyber investigation workflows",
        "Legal hold and governance capabilities in higher tiers",
      ],
      sources: [
        { label: "Druva endpoints plans", url: "https://www.druva.com/products/productivity-data/plans" },
        { label: "Druva curated snapshots", url: "https://help.druva.com/en/articles/8513166-curated-snapshots" },
      ],
    },
  },
  {
    aliases: ["datto", "datto endpoint backup", "kaseya datto endpoint backup"],
    snapshot: {
      id: createId(),
      name: "Datto Endpoint Backup",
      category: "Endpoint backup",
      monthlyPrice: 47.88,
      priceDisplay: "$47.88 / endpoint / year",
      storageModel: "Shared storage pool included in Kaseya 365 Endpoint",
      platforms: "Windows endpoints",
      segment: "SMB, MSP",
      positioning: "Adjacent",
      lastReviewed: TODAY,
      notes:
        "Sold more as part of a broader MSP endpoint stack than as a standalone consumer backup product.",
      pricingDetails:
        "The clearest public packaging is through Kaseya 365 Endpoint at about $47.88 per endpoint per year, bundling management, security, and backup together.",
      storageDetails:
        "Subscribers receive 5 TB of shared storage across protected endpoints before overage charges apply.",
      retentionDetails:
        "Retention specifics are contract-driven, but the product emphasizes automated endpoint protection as part of a managed stack.",
      restoreDetails:
        "Positioned around quick endpoint recovery and managed backup operations rather than self-serve household restore.",
      securityDetails:
        "The broader Kaseya 365 Endpoint suite bundles management, security, ransomware detection, and backup in one endpoint subscription.",
      cloudSyncPosture:
        "Datto Endpoint Backup is backup infrastructure for endpoints, not a sync product. It complements Dropbox, Google Drive, and iCloud rather than competing with their collaboration use cases.",
      legalHold: "Not supported",
      eDiscovery: "Not supported",
      defaultRetention: "Policy-based managed endpoint retention",
      retentionAddon: "Not publicly listed as a separate add-on",
      linuxSupport: "Not publicly positioned in this endpoint package",
      serverSupport: "Endpoint package focus; server support handled elsewhere in stack",
      bareMetalRecovery: "Not publicly positioned",
      limitations:
        "The value is strongest inside a broader Kaseya stack, and storage is shared rather than unlimited. It is less clean as a standalone backup story.",
      howWeWin:
        "Lead with standalone backup clarity. Backblaze does not depend on broader MSP suite context to deliver understandable unlimited endpoint backup value.",
      howWeLose:
        "Datto is stronger when the buyer already values Kaseya stack consolidation, MSP operations, and bundled endpoint tooling.",
      features: [
        "Automated encrypted endpoint backup",
        "Shared 5 TB storage included in suite packaging",
        "Bundled with endpoint management and security tooling",
        "Quick-recovery positioning for IT teams and MSPs",
        "Integrated with Datto RMM or VSA environments",
      ],
      sources: [
        { label: "Kaseya 365 Endpoint", url: "https://www.kaseya.com/products/kaseya-365/endpoint/" },
        { label: "Kaseya Store release note", url: "https://help.one.kaseya.com/help/Content/Release-notes/release-notes-k1.htm" },
      ],
    },
  },
  {
    aliases: ["comet", "comet backup"],
    snapshot: {
      id: createId(),
      name: "Comet Backup",
      category: "MSP endpoint backup platform",
      monthlyPrice: 24,
      priceDisplay: "$24+ / endpoint / year",
      storageModel: "Per-endpoint licensing plus optional storage",
      platforms: "Windows, macOS, Linux",
      segment: "SMB, MSP",
      positioning: "Adjacent",
      lastReviewed: TODAY,
      notes:
        "More infrastructure-flexible than Backblaze, with stronger appeal to MSPs and internal IT teams that want hosting and storage control.",
      pricingDetails:
        "Public pricing combines a monthly platform fee with protected-device pricing. Endpoint-type protected items start around $2 per month on annual commitments in higher plans, with separate console and storage costs.",
      storageDetails:
        "Cloud or on-prem storage can be used, and optional Comet Storage is priced separately. Capacity is not unlimited and is shaped by storage destination.",
      retentionDetails:
        "Retention is policy-driven and more administrator-controlled than a typical consumer backup product.",
      restoreDetails:
        "Supports files-and-folders restore, disk image restore, and bare-metal oriented workflows depending on protected item type.",
      securityDetails:
        "Advanced security controls, access controls, and audit logging are part of higher plans.",
      cloudSyncPosture:
        "Comet is backup infrastructure and can protect many endpoint data sets, but it does not behave like a user-facing sync-and-share service. It is generally complementary to cloud sync platforms.",
      legalHold: "Not supported",
      eDiscovery: "Not supported",
      defaultRetention: "Policy-based and administrator-defined",
      retentionAddon: "Handled through retention policy and storage choice",
      linuxSupport: "Supported",
      serverSupport: "Supported",
      bareMetalRecovery: "Supported via image-based restore workflows",
      limitations:
        "Requires more buyer decisions around hosting, storage destination, and policy setup. It is more admin-centric than turnkey for a standard seller-led endpoint backup pitch.",
      howWeWin:
        "Lead with faster time to value. Backblaze is easier to buy and adopt because the customer does not have to design storage architecture, hosting patterns, or backup infrastructure.",
      howWeLose:
        "Comet is stronger when the buyer wants hosting flexibility, storage control, and admin-driven backup architecture rather than turnkey backup.",
      features: [
        "Windows, macOS, and Linux endpoint backup",
        "Cloud-hosted or self-hosted management console",
        "Cloud or on-prem storage destination choice",
        "Disk image and bare-metal restore options",
        "Audit logging and advanced access controls on higher tiers",
      ],
      sources: [
        { label: "Comet pricing", url: "https://cometbackup.com/pricing" },
        { label: "Comet Proxmox release", url: "https://docs.cometbackup.com/blog/2026/2026-01-28-proxmox-backup-now-available/" },
      ],
    },
  },
  {
    aliases: ["cove", "cove data protection", "n-able cove"],
    snapshot: {
      id: createId(),
      name: "Cove Data Protection",
      category: "Cloud-first endpoint backup",
      monthlyPrice: 0,
      priceDisplay: "Quote-based",
      storageModel: "Included storage pooled across devices",
      platforms: "Windows, macOS",
      segment: "SMB, MSP",
      positioning: "Premium",
      lastReviewed: TODAY,
      notes:
        "Cloud-first endpoint protection with strong resilience and retention positioning, aimed more at managed IT than at individual consumers.",
      pricingDetails:
        "Public pricing is quote-led. The product is sold per protected device with cloud storage included, rather than as separate software and storage purchases.",
      storageDetails:
        "Each license includes storage that is pooled across protected devices, so smaller devices can offset larger ones.",
      retentionDetails:
        "Configurable retention can extend up to 10 years, which is much deeper than most personal backup products.",
      restoreDetails:
        "Supports file-level, bare-metal, and virtual recovery options depending on scenario.",
      securityDetails:
        "Cloud-first isolated backup design, fortified copies, and ransomware-focused messaging are central to the product.",
      cloudSyncPosture:
        "Cove Data Protection is oriented around protected recovery copies, not active sync collaboration. It complements Dropbox, Google Drive, and iCloud rather than replacing them.",
      legalHold: "Not supported",
      eDiscovery: "Not supported",
      defaultRetention: "Configurable, with long-term retention up to 10 years",
      retentionAddon: "Long retention is part of the platform rather than a simple add-on",
      linuxSupport: "Not publicly emphasized for endpoint tier",
      serverSupport: "Supported in broader Cove workload coverage",
      bareMetalRecovery: "Supported",
      limitations:
        "Public pricing is not transparent, and the product is aimed more at managed IT and MSP workflows than at simple self-serve endpoint backup.",
      howWeWin:
        "Lead with clear commercial terms and a simpler backup motion. Backblaze is easier to position in direct seller conversations without MSP-style workflow complexity.",
      howWeLose:
        "Cove is stronger when long retention, fortified copies, and MSP or managed-IT operational workflows are the priority.",
      features: [
        "Cloud storage included with device licensing",
        "10-year configurable retention",
        "File-level, bare-metal, and virtual recovery",
        "Fortified immutable copy protections",
        "RMM and PSA integrations for MSP operations",
      ],
      sources: [
        { label: "Cove pricing", url: "https://www.n-able.com/products/cove-data-protection/pricing" },
        { label: "Cove documents guide", url: "https://documentation.n-able.com/covedataprotection/USERGUIDE/documentation/Content/backup-manager/backup-documents/home.htm" },
        { label: "Cove fortified copies", url: "https://www.n-able.com/it/press/press-releases/n-able-announces-new-fortified-copies-feature-in-cove-data-protection-driving-stronger-ransomware-protection" },
      ],
    },
  },
  {
    aliases: ["unitrends", "unitrends endpoint backup"],
    snapshot: {
      id: createId(),
      name: "Unitrends Endpoint Backup",
      category: "Endpoint backup with DR",
      monthlyPrice: 0,
      priceDisplay: "Quote-based",
      storageModel: "Cloud backup and DR subscription",
      platforms: "Windows, Linux",
      segment: "SMB, MSP",
      positioning: "Premium",
      lastReviewed: TODAY,
      notes:
        "Pushes harder into business continuity and disaster recovery than standard consumer endpoint backup products.",
      pricingDetails:
        "Pricing is quote-based and sold as a subscription. Public messaging emphasizes predictable subscription cost with no extra failover or DR-test charges, but does not publish a list rate.",
      storageDetails:
        "Backups go directly to the Unitrends Cloud, with an appliance-free endpoint model focused on servers and remote endpoints.",
      retentionDetails:
        "The offer is tuned for continuity and recovery readiness rather than simple consumer file-history retention.",
      restoreDetails:
        "Supports file and folder restore, image export, and instant virtualization-style disaster recovery workflows.",
      securityDetails:
        "Immutable backup storage, encrypted transfers, and private-tenant cloud storage are prominent security and resilience points.",
      cloudSyncPosture:
        "Unitrends is centered on backup and disaster recovery, not user sync behavior. It should be positioned as complementary protection around cloud sync services.",
      legalHold: "Not supported",
      eDiscovery: "Not supported",
      defaultRetention: "Policy-driven DR-oriented retention",
      retentionAddon: "Handled through subscription and policy design",
      linuxSupport: "Supported",
      serverSupport: "Supported",
      bareMetalRecovery: "Supported",
      limitations:
        "Business continuity emphasis and quote-based packaging can feel heavy for teams that mainly need reliable endpoint backup rather than DR orchestration.",
      howWeWin:
        "Lead by reframing to the actual need. If the prospect does not need DR-heavy endpoint tooling, Backblaze offers a lighter and clearer path to protected endpoints.",
      howWeLose:
        "Unitrends is stronger when disaster recovery depth, instant virtualization, and continuity-heavy recovery workflows are required.",
      features: [
        "Automated direct-to-cloud backups",
        "No-appliance endpoint deployment",
        "Immutable cloud backup storage",
        "Instant virtualization-style disaster recovery",
        "Linux and Windows endpoint coverage",
      ],
      sources: [
        { label: "Unitrends endpoint backup", url: "https://www.unitrends.com/products/endpoint-backup/" },
        { label: "Unitrends endpoint DR", url: "https://www.unitrends.com/products/endpoint-backup/disaster-recovery/" },
        { label: "Unitrends Linux support", url: "https://www.unitrends.com/blog/unitrends-endpoint-backup-with-disaster-recovery/" },
      ],
    },
  },
  {
    aliases: ["msp360", "msp360 managed backup", "cloudberry"],
    snapshot: {
      id: createId(),
      name: "MSP360 Managed Backup",
      category: "MSP backup software",
      monthlyPrice: 0,
      priceDisplay: "Quote-based",
      storageModel: "Software platform with external storage choice",
      platforms: "Windows, macOS, Linux",
      segment: "SMB, MSP",
      positioning: "Adjacent",
      lastReviewed: TODAY,
      notes:
        "Appeals to MSPs that want multi-tenant management and storage flexibility more than a turnkey personal backup experience.",
      pricingDetails:
        "Pricing is sales-led rather than consumer self-serve. Public positioning focuses on MSP profitability, white-label operations, and lower lock-in rather than public endpoint list pricing.",
      storageDetails:
        "Storage is not a simple unlimited included pool; the product is built around flexible storage destination choice and centralized management.",
      retentionDetails:
        "Retention and policy depth are administrator-driven, fitting managed-service workflows more than one-click consumer backup.",
      restoreDetails:
        "Provides centralized backup and restore operations across many endpoints from a web console.",
      securityDetails:
        "Security messaging centers on control, centralized visibility, and managed endpoint operations rather than consumer-facing simplicity.",
      cloudSyncPosture:
        "MSP360 is a managed backup platform, not a collaboration sync tool. It can coexist with Dropbox, Google Drive, and iCloud but does not replace their workflow role.",
      legalHold: "Not supported",
      eDiscovery: "Not supported",
      defaultRetention: "Policy-based administrator-defined retention",
      retentionAddon: "Handled through policy and storage design, not a consumer add-on",
      linuxSupport: "Supported",
      serverSupport: "Supported",
      bareMetalRecovery: "Supported with image-based backup options",
      limitations:
        "Stronger for MSP operations than for direct end-user simplicity. Storage and policy flexibility also create more setup decisions for the buyer.",
      howWeWin:
        "Lead when the customer wants a finished backup product rather than a platform to operate. Backblaze is easier to explain and deploy without managed-service complexity.",
      howWeLose:
        "MSP360 is stronger when the buyer wants white-label MSP operations, flexible storage destinations, and multi-tenant management.",
      features: [
        "White-label multi-tenant backup platform",
        "Centralized web console for endpoint backup",
        "Remote monitoring and management of backups",
        "Flexible storage destination strategy",
        "Bulk management for many client endpoints",
      ],
      sources: [
        { label: "MSP360 managed backup", url: "https://www.msp360.com/managed-backup/" },
        { label: "MSP360 platform", url: "https://www.msp360.com/msp-platform/" },
      ],
    },
  },
];

const state = {
  competitors: [],
  selectedCompetitors: new Set(),
};

const elements = {
  heroStats: document.querySelector("#heroStats"),
  competitorForm: document.querySelector("#competitorForm"),
  competitorId: document.querySelector("#competitorId"),
  nameInput: document.querySelector("#nameInput"),
  categoryInput: document.querySelector("#categoryInput"),
  priceInput: document.querySelector("#priceInput"),
  storageInput: document.querySelector("#storageInput"),
  platformsInput: document.querySelector("#platformsInput"),
  segmentInput: document.querySelector("#segmentInput"),
  positioningInput: document.querySelector("#positioningInput"),
  reviewedInput: document.querySelector("#reviewedInput"),
  notesInput: document.querySelector("#notesInput"),
  pricingDetailsInput: document.querySelector("#pricingDetailsInput"),
  storageDetailsInput: document.querySelector("#storageDetailsInput"),
  retentionDetailsInput: document.querySelector("#retentionDetailsInput"),
  restoreDetailsInput: document.querySelector("#restoreDetailsInput"),
  securityDetailsInput: document.querySelector("#securityDetailsInput"),
  cloudSyncInput: document.querySelector("#cloudSyncInput"),
  legalHoldInput: document.querySelector("#legalHoldInput"),
  eDiscoveryInput: document.querySelector("#eDiscoveryInput"),
  defaultRetentionInput: document.querySelector("#defaultRetentionInput"),
  retentionAddonInput: document.querySelector("#retentionAddonInput"),
  linuxSupportInput: document.querySelector("#linuxSupportInput"),
  serverSupportInput: document.querySelector("#serverSupportInput"),
  bareMetalInput: document.querySelector("#bareMetalInput"),
  limitationsInput: document.querySelector("#limitationsInput"),
  howWeWinInput: document.querySelector("#howWeWinInput"),
  howWeLoseInput: document.querySelector("#howWeLoseInput"),
  featuresInput: document.querySelector("#featuresInput"),
  autofillBtn: document.querySelector("#autofillBtn"),
  autofillStatus: document.querySelector("#autofillStatus"),
  clearFormBtn: document.querySelector("#clearFormBtn"),
  comparisonBody: document.querySelector("#comparisonBody"),
  competitorCards: document.querySelector("#competitorCards"),
  cardTemplate: document.querySelector("#cardTemplate"),
  resultsLabel: document.querySelector("#resultsLabel"),
  battlecardGrid: document.querySelector("#battlecardGrid"),
  battlecardStatus: document.querySelector("#battlecardStatus"),
  exportBattlecardBtn: document.querySelector("#exportBattlecardBtn"),
  exportBattlecardPdfBtn: document.querySelector("#exportBattlecardPdfBtn"),
  editorDisclosure: document.querySelector("#profileEditorDisclosure"),
};

boot();

function boot() {
  try {
    state.competitors = loadCompetitors();
    bindEvents();
    resetForm();
    render();
    setAutofillStatus("Type a known competitor and press Fill company.");
    setBattlecardStatus("Select one or more competitors to generate a Backblaze battlecard.");
  } catch (error) {
    console.error("Backup Rival Radar failed to start.", error);
    setAutofillStatus("The app hit a startup error. Open the browser console and send me the message.");
  }
}

function loadCompetitors() {
  const saved = readStorage();
  if (!saved) {
    return researchedProfiles.map((profile) => cloneSnapshot(profile.snapshot));
  }

  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) && parsed.length
      ? parsed.map(normalizeCompetitorRecord)
      : researchedProfiles.map((profile) => cloneSnapshot(profile.snapshot));
  } catch {
    return researchedProfiles.map((profile) => cloneSnapshot(profile.snapshot));
  }
}

function persistCompetitors() {
  writeStorage(JSON.stringify(state.competitors));
}

function bindEvents() {
  elements.autofillBtn.addEventListener("click", autofillFromCompanyName);

  elements.competitorForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const existing = state.competitors.find((item) => item.id === elements.competitorId.value);
    const competitor = normalizeCompetitorRecord({
      id: elements.competitorId.value || createId(),
      name: elements.nameInput.value.trim(),
      category: elements.categoryInput.value.trim(),
      monthlyPrice: Number(elements.priceInput.value),
      priceDisplay: "",
      storageModel: elements.storageInput.value.trim(),
      platforms: elements.platformsInput.value.trim(),
      segment: elements.segmentInput.value.trim(),
      positioning: elements.positioningInput.value,
      lastReviewed: elements.reviewedInput.value,
      notes: elements.notesInput.value.trim(),
      pricingDetails: elements.pricingDetailsInput.value.trim(),
      storageDetails: elements.storageDetailsInput.value.trim(),
      retentionDetails: elements.retentionDetailsInput.value.trim(),
      restoreDetails: elements.restoreDetailsInput.value.trim(),
      securityDetails: elements.securityDetailsInput.value.trim(),
      cloudSyncPosture: elements.cloudSyncInput.value.trim(),
      legalHold: elements.legalHoldInput.value.trim(),
      eDiscovery: elements.eDiscoveryInput.value.trim(),
      defaultRetention: elements.defaultRetentionInput.value.trim(),
      retentionAddon: elements.retentionAddonInput.value.trim(),
      linuxSupport: elements.linuxSupportInput.value.trim(),
      serverSupport: elements.serverSupportInput.value.trim(),
      bareMetalRecovery: elements.bareMetalInput.value.trim(),
      howWeWin: elements.howWeWinInput.value.trim(),
      limitations: elements.limitationsInput.value.trim(),
      howWeLose: elements.howWeLoseInput.value.trim(),
      features: parseList(elements.featuresInput.value),
      sources: existing ? existing.sources : getProfileSources(elements.nameInput.value),
    });

    const existingIndex = state.competitors.findIndex((item) => item.id === competitor.id);
    if (existingIndex >= 0) {
      state.competitors[existingIndex] = competitor;
    } else {
      state.competitors.unshift(competitor);
    }

    persistCompetitors();
    setAutofillStatus(`Saved ${competitor.name}.`);
    resetForm();
    render();
  });

  elements.clearFormBtn.addEventListener("click", () => {
    resetForm();
    setAutofillStatus("");
  });

  elements.exportBattlecardBtn.addEventListener("click", exportBattlecard);
  elements.exportBattlecardPdfBtn.addEventListener("click", exportBattlecardPdf);
}

function normalizeCompetitorRecord(record) {
  return {
    id: record.id || createId(),
    name: record.name || "",
    category: record.category || "",
    monthlyPrice: Number(record.monthlyPrice || 0),
    priceDisplay: record.priceDisplay || "",
    storageModel: record.storageModel || "",
    platforms: record.platforms || "",
    segment: record.segment || "",
    positioning: POSITION_OPTIONS.includes(record.positioning) ? record.positioning : "Direct",
    lastReviewed: record.lastReviewed || TODAY,
    notes: record.notes || "",
    pricingDetails: record.pricingDetails || "",
    storageDetails: record.storageDetails || "",
    retentionDetails: record.retentionDetails || "",
    restoreDetails: record.restoreDetails || "",
    securityDetails: record.securityDetails || "",
    cloudSyncPosture: record.cloudSyncPosture || "",
    legalHold: record.legalHold || "",
    eDiscovery: record.eDiscovery || "",
    defaultRetention: record.defaultRetention || "",
    retentionAddon: record.retentionAddon || "",
    linuxSupport: record.linuxSupport || "",
    serverSupport: record.serverSupport || "",
    bareMetalRecovery: record.bareMetalRecovery || "",
    howWeWin: record.howWeWin || "",
    limitations: record.limitations || "",
    howWeLose: record.howWeLose || record.howWeWin || "",
    features: normalizeList(record.features),
    sources: Array.isArray(record.sources) ? record.sources : [],
  };
}

function lookupProfile(companyName) {
  const normalizedQuery = normalizeName(companyName);
  if (!normalizedQuery) {
    return null;
  }

  return (
    researchedProfiles.find((profile) =>
      profile.aliases.some((alias) => {
        const normalizedAlias = normalizeName(alias);
        return (
          normalizedAlias === normalizedQuery ||
          normalizedAlias.includes(normalizedQuery) ||
          normalizedQuery.includes(normalizedAlias)
        );
      }),
    ) || null
  );
}

function autofillFromCompanyName() {
  const profile = lookupProfile(elements.nameInput.value);
  if (!profile) {
    setAutofillStatus("No built-in profile for that name yet. Enter the fields manually and save.");
    return;
  }

  const snapshot = cloneSnapshot(profile.snapshot);
  snapshot.id = elements.competitorId.value || createId();
  populateForm(snapshot);
  setAutofillStatus(`Filled ${profile.snapshot.name} from the built-in research set.`);
}

function getProfileSources(companyName) {
  const profile = lookupProfile(companyName);
  return profile ? cloneSnapshot(profile.snapshot.sources) : [];
}

function render() {
  renderHeroStats();
  renderTable();
  renderCards();
  renderBattlecard();
}

function renderHeroStats() {
  const selectedCount = getSelectedCompetitors().length;
  const directCount = state.competitors.filter((item) => item.positioning === "Direct").length;
  const pricedCompetitors = state.competitors.filter((item) => item.monthlyPrice > 0);
  const averagePrice = pricedCompetitors.length
    ? pricedCompetitors.reduce((sum, item) => sum + item.monthlyPrice, 0) / pricedCompetitors.length
    : 0;

  const stats = [
    { label: "Tracked rivals", value: String(state.competitors.length) },
    { label: "Battlecard picks", value: String(selectedCount) },
    { label: "Direct competitors", value: String(directCount) },
    { label: "Avg rival annual price", value: `$${averagePrice.toFixed(2)}` },
  ];

  elements.heroStats.innerHTML = stats
    .map(
      (stat) => `
        <div class="stat-card">
          <span class="eyebrow">${escapeHtml(stat.label)}</span>
          <strong>${escapeHtml(stat.value)}</strong>
        </div>
      `,
    )
    .join("");
}

function renderTable() {
  elements.resultsLabel.textContent = `${state.competitors.length} competitors tracked`;
  elements.comparisonBody.innerHTML = state.competitors
    .map(
      (competitor) => `
        <tr>
          <td>
            <input
              class="compare-checkbox"
              type="checkbox"
              data-id="${escapeAttribute(competitor.id)}"
              ${state.selectedCompetitors.has(competitor.id) ? "checked" : ""}
            />
          </td>
          <td>${escapeHtml(competitor.name)}</td>
          <td>${escapeHtml(getPriceDisplay(competitor))}</td>
          <td>${escapeHtml(competitor.storageModel)}</td>
          <td>${escapeHtml(competitor.segment)}</td>
          <td>${escapeHtml(competitor.features.slice(0, 2).join(" / "))}</td>
          <td>${escapeHtml(competitor.lastReviewed)}</td>
        </tr>
      `,
    )
    .join("");

  const checkboxes = elements.comparisonBody.querySelectorAll(".compare-checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      toggleBattlecardSelection(checkbox.getAttribute("data-id"));
    });
  });
}

function renderCards() {
  elements.competitorCards.innerHTML = "";

  state.competitors.forEach((competitor) => {
    const fragment = elements.cardTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".competitor-card");

    if (state.selectedCompetitors.has(competitor.id)) {
      card.classList.add("is-selected");
    }

    fragment.querySelector(".position-badge").textContent = competitor.positioning;
    fragment.querySelector(".review-date").textContent = `Reviewed ${competitor.lastReviewed}`;
    fragment.querySelector(".company-name").textContent = competitor.name;
    fragment.querySelector(".category").textContent = competitor.category;
    fragment.querySelector(".price").textContent = getPriceDisplay(competitor);
    fragment.querySelector(".storage").textContent = competitor.storageModel;
    fragment.querySelector(".platforms").textContent = competitor.platforms;
    fragment.querySelector(".segment").textContent = competitor.segment;
    fragment.querySelector(".features").innerHTML = renderFeatureList(competitor.features);
    fragment.querySelector(".notes").textContent = competitor.notes;
    fragment.querySelector(".cloud-sync").textContent = `Cloud sync: ${competitor.cloudSyncPosture}`;
    fragment.querySelector(".how-we-win").textContent = `How we win: ${competitor.howWeWin}`;
    fragment.querySelector(".limitations").textContent = `Limitations: ${competitor.limitations}`;
    fragment.querySelector(".how-we-lose").textContent = `How we lose: ${competitor.howWeLose}`;
    fragment.querySelector(".sources").innerHTML = renderSources(competitor.sources);

    fragment.querySelector(".select-button").addEventListener("click", () => {
      toggleBattlecardSelection(competitor.id);
    });
    fragment.querySelector(".edit-button").addEventListener("click", () => populateForm(competitor));
    fragment.querySelector(".delete-button").addEventListener("click", () => deleteCompetitor(competitor.id));

    card.addEventListener("click", (event) => {
      if (event.target.tagName !== "BUTTON" && event.target.tagName !== "A" && event.target.tagName !== "INPUT") {
        populateForm(competitor);
      }
    });

    elements.competitorCards.append(fragment);
  });
}

function renderBattlecard() {
  const selected = getSelectedCompetitors();
  if (!selected.length) {
    elements.battlecardGrid.innerHTML = "";
    setBattlecardStatus("Select one or more competitors to generate a Backblaze battlecard.");
    return;
  }

  elements.battlecardGrid.innerHTML = renderBattlecardComparison(selected);
  setBattlecardStatus(`${selected.length} competitor${selected.length === 1 ? "" : "s"} selected.`);
}

function renderBattlecardComparison(selected) {
  const profiles = [backblazeProfile].concat(selected);
  const rows = [
    { label: "Category", key: "category", type: "text" },
    { label: "Annual price", key: "monthlyPrice", type: "text", formatter: formatPrice },
    { label: "Storage model", key: "storageModel", type: "text" },
    { label: "Storage scope", key: "storageDetails", type: "text" },
    { label: "Platforms", key: "platforms", type: "text" },
    { label: "Segment", key: "segment", type: "text" },
    { label: "Positioning", key: "positioning", type: "text" },
    { label: "Pricing details", key: "pricingDetails", type: "text" },
    { label: "Retention", key: "retentionDetails", type: "text" },
    { label: "Restore", key: "restoreDetails", type: "text" },
    { label: "Security", key: "securityDetails", type: "text" },
    { label: "Cloud sync posture", key: "cloudSyncPosture", type: "text" },
    { label: "Legal hold", key: "legalHold", type: "text" },
    { label: "eDiscovery", key: "eDiscovery", type: "text" },
    { label: "Default retention", key: "defaultRetention", type: "text" },
    { label: "Retention add-on", key: "retentionAddon", type: "text" },
    { label: "Linux support", key: "linuxSupport", type: "text" },
    { label: "Server support", key: "serverSupport", type: "text" },
    { label: "Bare metal recovery", key: "bareMetalRecovery", type: "text" },
    { label: "Limitations", key: "limitations", type: "text" },
    { label: "Other features", key: "features", type: "list" },
    { label: "Positioning notes", key: "notes", type: "text" },
  ];

  return `
    <article class="battlecard-card">
      <header class="battlecard-header">
        <div>
          <p class="eyebrow">Side-by-side battlecard</p>
          <h3>Backblaze Computer Backup vs selected competitors</h3>
        </div>
      </header>
      <div class="battlecard-table-wrap">
        <table class="battlecard-table">
          <thead>
            <tr>
              <th>Attribute</th>
              ${profiles.map((profile) => `<th>${escapeHtml(profile.name)}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${rows
              .map(
                (row) => `
                  <tr>
                    <th>${escapeHtml(row.label)}</th>
                    ${profiles.map((profile) => `<td>${renderBattlecardCell(profile, row)}</td>`).join("")}
                  </tr>
                `,
              )
              .join("")}
            <tr>
              <th>${escapeHtml("How we win")}</th>
              <td colspan="${profiles.length}" class="battlecard-summary-cell">${renderSummaryList(
                selected,
                "howWeWin",
              )}</td>
            </tr>
            <tr>
              <th>${escapeHtml("How we lose")}</th>
              <td colspan="${profiles.length}" class="battlecard-summary-cell">${renderSummaryList(
                selected,
                "howWeLose",
              )}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="battlecard-bottomline">
        <strong>Sources:</strong>
        ${profiles
          .map((profile) => `${profile.name}: ${profile.sources.map((source) => source.url).join(", ") || "None stored"}`)
          .join(" | ")}
      </div>
    </article>
  `;
}

function toggleBattlecardSelection(id) {
  if (state.selectedCompetitors.has(id)) {
    state.selectedCompetitors.delete(id);
  } else {
    state.selectedCompetitors.add(id);
  }
  render();
}

function getSelectedCompetitors() {
  return state.competitors.filter((competitor) => state.selectedCompetitors.has(competitor.id));
}

function exportBattlecard() {
  const selected = getSelectedCompetitors();
  if (!selected.length) {
    setBattlecardStatus("Select at least one competitor before exporting.");
    return;
  }

  const battlecardText = buildBattlecardText(selected);

  if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
    navigator.clipboard
      .writeText(battlecardText)
      .then(() => {
        setBattlecardStatus("Battlecard copied to clipboard.");
      })
      .catch(() => {
        downloadBattlecardFile(battlecardText);
      });
    return;
  }

  downloadBattlecardFile(battlecardText);
}

function exportBattlecardPdf() {
  const selected = getSelectedCompetitors();
  if (!selected.length) {
    setBattlecardStatus("Select at least one competitor before exporting.");
    return;
  }

  const iframe = document.createElement("iframe");
  iframe.className = "print-frame";
  iframe.setAttribute("aria-hidden", "true");
  document.body.append(iframe);

  const frameWindow = iframe.contentWindow;
  if (!frameWindow) {
    iframe.remove();
    setBattlecardStatus("PDF export could not start in this browser.");
    return;
  }

  const markup = buildPrintableBattlecardMarkup(selected);
  const cleanup = () => {
    window.setTimeout(() => {
      iframe.remove();
    }, 1000);
  };

  iframe.onload = () => {
    frameWindow.focus();
    frameWindow.print();
    cleanup();
  };

  const frameDocument = frameWindow.document;
  frameDocument.open();
  frameDocument.write(markup);
  frameDocument.close();
  setBattlecardStatus("Print dialog opened. Choose Save as PDF in the browser.");
}

function downloadBattlecardFile(content) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "backblaze-battlecard.txt";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  setBattlecardStatus("Battlecard exported as a text file.");
}

function renderSources(sources) {
  if (!sources || !sources.length) {
    return "No source links stored";
  }

  return sources
    .map(
      (source) =>
        `<a href="${escapeAttribute(source.url)}" target="_blank" rel="noreferrer">${escapeHtml(source.label)}</a>`,
    )
    .join(" · ");
}

function populateForm(competitor) {
  if (elements.editorDisclosure) {
    elements.editorDisclosure.open = true;
  }
  elements.competitorId.value = competitor.id;
  elements.nameInput.value = competitor.name;
  elements.categoryInput.value = competitor.category;
  elements.priceInput.value = competitor.monthlyPrice;
  elements.storageInput.value = competitor.storageModel;
  elements.platformsInput.value = competitor.platforms;
  elements.segmentInput.value = competitor.segment;
  elements.positioningInput.value = competitor.positioning;
  elements.reviewedInput.value = competitor.lastReviewed;
  elements.notesInput.value = competitor.notes;
  elements.pricingDetailsInput.value = competitor.pricingDetails;
  elements.storageDetailsInput.value = competitor.storageDetails;
  elements.retentionDetailsInput.value = competitor.retentionDetails;
  elements.restoreDetailsInput.value = competitor.restoreDetails;
  elements.securityDetailsInput.value = competitor.securityDetails;
  elements.cloudSyncInput.value = competitor.cloudSyncPosture;
  elements.legalHoldInput.value = competitor.legalHold;
  elements.eDiscoveryInput.value = competitor.eDiscovery;
  elements.defaultRetentionInput.value = competitor.defaultRetention;
  elements.retentionAddonInput.value = competitor.retentionAddon;
  elements.linuxSupportInput.value = competitor.linuxSupport;
  elements.serverSupportInput.value = competitor.serverSupport;
  elements.bareMetalInput.value = competitor.bareMetalRecovery;
  elements.howWeWinInput.value = competitor.howWeWin;
  elements.limitationsInput.value = competitor.limitations;
  elements.howWeLoseInput.value = competitor.howWeLose;
  elements.featuresInput.value = competitor.features.join("\n");
  elements.nameInput.focus();
}

function resetForm() {
  elements.competitorId.value = "";
  elements.competitorForm.reset();
  elements.positioningInput.value = "Direct";
  elements.reviewedInput.value = TODAY;
}

function deleteCompetitor(id) {
  state.competitors = state.competitors.filter((item) => item.id !== id);
  state.selectedCompetitors.delete(id);
  persistCompetitors();
  if (elements.competitorId.value === id) {
    resetForm();
  }
  render();
}

function setAutofillStatus(message) {
  elements.autofillStatus.textContent = message;
}

function setBattlecardStatus(message) {
  elements.battlecardStatus.textContent = message;
}

function formatPrice(value) {
  return `$${Number(value || 0).toFixed(2)} / year`;
}

function formatBattlecardValue(profile, row) {
  if (row.key === "monthlyPrice") {
    return getPriceDisplay(profile);
  }
  const value = profile[row.key];
  return row.formatter ? row.formatter(value) : value;
}

function renderBattlecardCell(profile, row) {
  if (row.type === "list") {
    return renderFeatureList(profile[row.key]);
  }

  return escapeHtml(formatBattlecardValue(profile, row));
}

function buildBattlecardText(selected) {
  const profiles = [backblazeProfile].concat(selected);
  const rows = [
    { label: "Category", key: "category", type: "text" },
    { label: "Annual price", key: "monthlyPrice", type: "text", formatter: formatPrice },
    { label: "Storage model", key: "storageModel", type: "text" },
    { label: "Storage scope", key: "storageDetails", type: "text" },
    { label: "Platforms", key: "platforms", type: "text" },
    { label: "Segment", key: "segment", type: "text" },
    { label: "Positioning", key: "positioning", type: "text" },
    { label: "Pricing details", key: "pricingDetails", type: "text" },
    { label: "Retention", key: "retentionDetails", type: "text" },
    { label: "Restore", key: "restoreDetails", type: "text" },
    { label: "Security", key: "securityDetails", type: "text" },
    { label: "Cloud sync posture", key: "cloudSyncPosture", type: "text" },
    { label: "Legal hold", key: "legalHold", type: "text" },
    { label: "eDiscovery", key: "eDiscovery", type: "text" },
    { label: "Default retention", key: "defaultRetention", type: "text" },
    { label: "Retention add-on", key: "retentionAddon", type: "text" },
    { label: "Linux support", key: "linuxSupport", type: "text" },
    { label: "Server support", key: "serverSupport", type: "text" },
    { label: "Bare metal recovery", key: "bareMetalRecovery", type: "text" },
    { label: "Limitations", key: "limitations", type: "text" },
    { label: "Other features", key: "features", type: "list" },
    { label: "Positioning notes", key: "notes", type: "text" },
  ];

  const lines = [`Battlecard: ${profiles.map((profile) => profile.name).join(" vs ")}`, ""];
  rows.forEach((row) => {
    lines.push(`${row.label}:`);
    profiles.forEach((profile) => {
      const value = row.type === "list" ? profile[row.key].join(" | ") : formatBattlecardValue(profile, row);
      lines.push(`- ${profile.name}: ${value}`);
    });
    lines.push("");
  });
  lines.push("How we win:");
  normalizeList(
    selected.map((competitor) => `${competitor.name}: ${competitor.howWeWin}`),
  ).forEach((item) => lines.push(`- ${item}`));
  lines.push("");
  lines.push("How we lose:");
  normalizeList(
    selected.map((competitor) => `${competitor.name}: ${competitor.howWeLose}`),
  ).forEach((item) => lines.push(`- ${item}`));
  lines.push("");
  lines.push("Sources:");
  profiles.forEach((profile) => {
    lines.push(`- ${profile.name}: ${profile.sources.map((source) => source.url).join(", ") || "None stored"}`);
  });
  return lines.join("\n");
}

function buildPrintableBattlecardMarkup(selected) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>${escapeHtml(`Backblaze battlecard - ${selected.map((item) => item.name).join(", ")}`)}</title>
        <style>
          :root {
            --brand: #e21f26;
            --brand-dark: #b6171d;
            --ink: #1c1c1c;
            --muted: #5f5f5f;
            --line: #e4c7c8;
            --wash: #fff3f3;
          }
          body { font-family: Arial, sans-serif; margin: 24px; color: var(--ink); background: #fffdfb; }
          h1 { margin: 0; font-size: 26px; line-height: 1; }
          h2 { margin: 0; font-size: 14px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--brand-dark); }
          p { margin: 0; color: var(--muted); }
          .print-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            padding: 18px 20px;
            margin-bottom: 18px;
            border: 1px solid #f3c0c2;
            border-radius: 18px;
            background: linear-gradient(135deg, #fff6f6, #ffe9ea);
          }
          .logo-lockup {
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .logo-wordmark {
            font-size: 24px;
            font-weight: 700;
            letter-spacing: -0.04em;
            color: var(--brand);
          }
          .logo-sub {
            font-size: 12px;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: var(--brand-dark);
          }
          .meta {
            text-align: right;
            font-size: 12px;
            color: var(--muted);
          }
          table { width: 100%; border-collapse: collapse; table-layout: fixed; }
          th, td { border: 1px solid var(--line); padding: 10px; text-align: left; vertical-align: top; font-size: 12px; }
          thead th { background: var(--brand); color: white; }
          tbody th { background: var(--wash); color: var(--ink); width: 140px; }
          tbody tr:nth-child(even) td { background: #fffaf7; }
          ul { margin: 0; padding-left: 18px; }
          li + li { margin-top: 4px; }
          .battlecard-card { border: none; box-shadow: none; padding: 0; }
          .battlecard-header { margin-bottom: 12px; }
          .battlecard-header .eyebrow { font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--brand-dark); }
          .battlecard-bottomline {
            margin-top: 16px;
            padding: 12px 14px;
            font-size: 12px;
            color: var(--muted);
            border: 1px solid var(--line);
            border-radius: 12px;
            background: #fffaf7;
          }
          @media print { body { margin: 12px; } }
        </style>
      </head>
      <body>
        <section class="print-header">
          <div class="logo-lockup">
            ${renderPrintableBackblazeLogo()}
            <div>
              <div class="logo-wordmark">Backblaze</div>
              <div class="logo-sub">Computer Backup Battlecard</div>
            </div>
          </div>
          <div class="meta">
            <div>Generated on ${TODAY}</div>
            <div>${escapeHtml(selected.map((item) => item.name).join(" • "))}</div>
          </div>
        </section>
        ${renderBattlecardComparison(selected)}
        <script>
          window.addEventListener("load", function () {
            window.focus();
          });
        </script>
      </body>
    </html>
  `;
}

function renderPrintableBackblazeLogo() {
  return `
    <svg width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="bbg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ff5a4f" />
          <stop offset="100%" stop-color="#d91921" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="50" height="50" rx="16" fill="url(#bbg)" />
      <path d="M31.7 12.8c1.3 5.6-1.1 8.8-3.8 11.4-2.7 2.5-4.2 4.6-4.2 7.7 0 3 1.8 5.5 4.9 6.5-5.9 1.1-11.1-2.8-11.1-9 0-3.9 1.8-7.2 5.2-10.1 2.2-1.8 4.8-3.8 9-6.5z" fill="#fff5f4"/>
      <path d="M35.6 23.7c1.1 1.9 1.7 4 1.7 6.2 0 6.8-4.9 11.5-11.4 11.5-3.1 0-5.7-0.9-7.8-2.6 1.3 0.3 2.5 0.4 3.6 0.4 6.1 0 10.8-4 10.8-10.1 0-2-0.6-3.8-1.7-5.4 1.8-1.2 3-2.7 3.9-4.5 0 1.5 0.3 2.9 0.9 4.5z" fill="#ffd2cf"/>
      <path d="M25.8 24.8c2.9 1.7 4.5 4.2 4.5 7 0 3.6-2.6 6.3-6.3 6.3-2.8 0-5.1-1.4-6-3.9 4.2-0.9 7-4.1 7-9.4 0-0.1 0-0.1 0-0.2 0.3 0.1 0.5 0.2 0.8 0.2z" fill="#ffffff"/>
    </svg>
  `;
}

function normalizeName(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

function cloneSnapshot(snapshot) {
  return JSON.parse(JSON.stringify(snapshot));
}

function createId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }

  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function parseList(value) {
  return normalizeList(String(value || "").split(/\n+/));
}

function getPriceDisplay(profile) {
  if (profile.priceDisplay) {
    return profile.priceDisplay;
  }
  return formatPrice(profile.monthlyPrice);
}

function normalizeList(value) {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }

  return String(value || "")
    .split(/\s*;\s*/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function renderFeatureList(items) {
  const normalized = normalizeList(items);
  if (!normalized.length) {
    return "<span class=\"empty-value\">No feature detail stored</span>";
  }

  return `<ul class="feature-list">${normalized.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function renderSummaryList(competitors, key) {
  const items = competitors
    .map((competitor) => {
      const value = competitor[key];
      if (!value) {
        return "";
      }
      return `<li><strong>${escapeHtml(competitor.name)}:</strong> ${escapeHtml(value)}</li>`;
    })
    .filter(Boolean);

  if (!items.length) {
    return '<span class="empty-value">No summary stored</span>';
  }

  return `<ul class="feature-list summary-list">${items.join("")}</ul>`;
}

function readStorage() {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch (error) {
    console.warn("Storage read failed, using in-memory data.", error);
    return null;
  }
}

function writeStorage(value) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch (error) {
    console.warn("Storage write failed, changes will not persist.", error);
    setAutofillStatus("Browser storage is unavailable here, so changes will not persist after refresh.");
  }
}
