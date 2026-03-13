window.CONTENT_MAP = {
  meta: {
    version: "1.0.0",
    generatedOn: "2026-02-26",
    purpose:
      "Single source of truth for portfolio content, detail-page routing, and legacy slide/floating-node image reuse.",
    sourceFiles: [
      "index.html",
      "project_pelliscope.html",
      "project_oncogemma.html",
      "project_meddiscover.html",
      "index.html"
    ]
  },

  routing: {
    indexV2Cards: {
      cancerGenomicsWorks: {
        currentBehavior: "Static card + external HuggingFace link only",
        currentPage: "index.html#highlights",
        proposedPage: "project_cancer_genomics.html",
        status: "needs_new_page"
      },
      tfCertification: {
        currentBehavior: "Modal trigger with placeholder image id",
        currentPage: "index.html#highlights",
        proposedPage: "certification_tensorflow_developer.html",
        status: "needs_real_media_and_page"
      },
      researchPapers: {
        currentBehavior: "Static list in highlight card",
        currentPage: "index.html#highlights",
        proposedPage: "research_publications.html",
        status: "needs_new_page"
      },
      oncogemma: {
        currentBehavior: "Linked to dedicated page",
        currentPage: "index.html#projects",
        proposedPage: "project_oncogemma.html",
        status: "already_exists"
      },
      pelliscope: {
        currentBehavior: "Linked to dedicated page",
        currentPage: "index.html#projects",
        proposedPage: "project_pelliscope.html",
        status: "already_exists"
      },
      meddiscover: {
        currentBehavior: "Linked to dedicated page",
        currentPage: "index.html#projects",
        proposedPage: "project_meddiscover.html",
        status: "already_exists"
      },
      mlCopilotAgent: {
        currentBehavior: "Card only, no dedicated page link",
        currentPage: "index.html#projects",
        proposedPage: "project_ml_copilot.html",
        status: "needs_new_page"
      }
    }
  },

  socialFeed: {
    note:
      "Backend-only source of truth for LinkedIn feed metadata. UI can consume this map later without editing hardcoded HTML first.",
    indexV2CurrentHardcoded: [
      {
        slot: "post_1_whx",
        url: "https://www.linkedin.com/posts/vatsal-patel-95b429141_whx-worldhealthexpodubai-arabhealth-activity-7428195692906459136-bo9I",
        status: "already_correct"
      },
      {
        slot: "post_2_aura",
        url: "https://www.linkedin.com/posts/vatsal-patel-95b429141_aura-llm-privacy-activity-7395029142831599616-e_lO",
        status: "present_in_index"
      },
      {
        slot: "post_3_pelliscope_old",
        url: "https://www.linkedin.com/posts/vatsal-patel-95b429141_pelliscope-dermatologyai-healthtech-activity-7407028143110254592-A1_G",
        status: "present_in_index_but_superseded"
      }
    ],
    linkedInPosts: [
      {
        id: "whx_live_preview_2026",
        title: "WHX Dubai Live Preview",
        author: "Vatsal Patel",
        url: "https://www.linkedin.com/posts/vatsal-patel-95b429141_whx-worldhealthexpodubai-arabhealth-activity-7428195692906459136-bo9I",
        summary:
          "Live deployment preview of Derma AI at WHX Dubai with focus on real-world clinical workflow behavior.",
        media: [
          "images/whx_expo26/image1_expo.jpg",
          "images/whx_expo26/image2_expo.jpg",
          "images/whx_expo26/image4_expo.jpg",
          "images/whx_expo26/image5_expo.jpg"
        ],
        tags: ["#WHXDubai", "#ClinicalAI", "#HealthTech"]
      },
      {
        id: "aura_anti_cloud_launch",
        title: "Meet AURA: The Anti-Cloud AI",
        author: "Vatsal Patel / HawkFranklin Research",
        url: "https://www.linkedin.com/posts/vatsal-patel-95b429141_aura-llm-privacy-activity-7395029142831599616-e_lO",
        summary:
          "Privacy-first local LLM inference on Android via LiteRT with zero data egress positioning.",
        media: ["assets/media/videos/aura_mobile-video.mp4", "assets/media/icons/aura_icon.png"],
        tags: ["#LocalLLM", "#Privacy", "#LiteRT", "#OnDeviceAI"]
      },
      {
        id: "oncogemma_official_post",
        title: "OncoGemma Official LinkedIn Post",
        author: "Vatsal Patel",
        url: "https://www.linkedin.com/posts/vatsal-patel-95b429141_pathologyai-oncology-digitalhealth-activity-7400016851470237696-g9tJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAACJppBcBYGcCM4jD4mdwm52pKD2dAIL-sU0",
        summary:
          "Pathology AI / oncology product positioning update for OncoGemma.",
        media: ["assets/media/videos/oncogemma-demo1_crop.mp4", "assets/media/icons/oncogemma_logo_only.png"],
        tags: ["#PathologyAI", "#Oncology", "#DigitalHealth"]
      },
      {
        id: "pelliscope_official_post",
        title: "PelliScope Official LinkedIn Post",
        author: "Vatsal Patel",
        url: "https://www.linkedin.com/posts/vatsal-patel-95b429141_digitalhealth-aihealthcare-pharmamarketing-activity-7399682830387294208-tL7P?utm_source=share&utm_medium=member_desktop&rcm=ACoAACJppBcBYGcCM4jD4mdwm52pKD2dAIL-sU0",
        summary:
          "Official PelliScope post on digital health and AI healthcare positioning.",
        media: ["assets/media/videos/pelliscope_preview.mp4", "assets/media/icons/pelliscope.png"],
        tags: ["#DigitalHealth", "#AIHealthcare", "#PharmaMarketing"]
      },
      {
        id: "peer_review_service_post",
        title: "Peer Review Contribution",
        author: "Vatsal Patel",
        url: "https://www.linkedin.com/posts/vatsal-patel-95b429141_peerreview-scientificcommunity-researchintegrity-activity-7407060637798797313-R7cW?utm_source=share&utm_medium=member_desktop&rcm=ACoAACJppBcBYGcCM4jD4mdwm52pKD2dAIL-sU0",
        summaryShort:
          "Reviewed manuscripts for a 4.8 IF journal in biomedical signal processing and applied AI.",
        media: ["images/certificate_reviewing_papers.jpeg"],
        tags: ["#PeerReview", "#ScientificCommunity", "#ResearchIntegrity", "#AIinHealthcare"]
      }
    ],
    recommendedIndexV2Order: [
      "whx_live_preview_2026",
      "aura_anti_cloud_launch",
      "oncogemma_official_post",
      "pelliscope_official_post",
      "peer_review_service_post"
    ]
  },

  projects: {
    existingPages: [
      {
        id: "pelliscope",
        title: "PelliScope",
        page: "project_pelliscope.html",
        primaryMedia: {
          icon: "assets/media/icons/pelliscope.png",
          heroVideo: "assets/media/videos/pelliscope_preview.mp4",
          featureVideo: "assets/media/videos/pelliscope_preview.mp4"
        },
        links: [
          { label: "Website", url: "https://www.pelliscope.in" }
        ]
      },
      {
        id: "oncogemma",
        title: "OncoGemma",
        page: "project_oncogemma.html",
        primaryMedia: {
          icon: "assets/media/icons/oncogemma_logo_only.png",
          heroVideo: "assets/media/videos/oncogemma-demo1_crop.mp4",
          featureVideo: "assets/media/videos/oncogemma-demo1_crop.mp4"
        },
        links: []
      },
      {
        id: "meddiscover",
        title: "MedDiscover",
        page: "project_meddiscover.html",
        primaryMedia: {
          icon: null,
          heroVisual: "grid-pattern",
          slideDeckId: "legacy_meddiscover"
        },
        links: []
      }
    ],

    newPagesToCreate: [
      {
        id: "cancer_genomics",
        title: "Cancer Genomics Works",
        suggestedPage: "project_cancer_genomics.html",
        sourceDeckIds: ["legacy_pioneer", "legacy_gat"],
        links: [
          {
            label: "HuggingFace Space",
            url: "https://huggingface.co/spaces/VatsalPatel18/GraphAttentionAutoencoder-MultiOmics"
          },
          {
            label: "GitHub",
            url: "https://github.com/VatsalPatel18/GraphAttentionAutoencoder-MultiOmics"
          },
          {
            label: "Zenodo Preprint",
            url: "https://doi.org/10.5281/zenodo.14357409"
          }
        ]
      },
      {
        id: "ml_copilot",
        title: "ML Copilot Agent",
        suggestedPage: "project_ml_copilot.html",
        sourceDeckIds: ["legacy_ml_copilot"],
        links: [
          {
            label: "GitHub",
            url: "https://github.com/VatsalPatel18/ml-copilot-agent.git"
          },
          {
            label: "PyPI",
            url: "https://pypi.org/project/ml-copilot-agent/"
          },
          {
            label: "Docs",
            url: "https://ml-copilot-agent.readthedocs.io/en/latest/"
          }
        ]
      }
    ]
  },

  certifications: [
    {
      id: "deeplearning_tf_developer",
      title: "DeepLearning.AI TensorFlow Developer",
      verifyUrl: "https://coursera.org/verify/professional-cert/F4RVGGKYRMN6",
      localImageCandidates: [
        "images/specialization_1.jpg",
        "images/specialization_3.jpg",
        "images/Degree.png"
      ],
      currentIndexV2Trigger: "openCertModal('Placeholder_Cert.png')",
      status: "verify_link_exists_but_local_cert_image_not_finalized"
    },
    {
      id: "ml_with_tf_google_cloud",
      title: "Machine Learning with TensorFlow on Google Cloud",
      verifyUrl: "https://coursera.org/verify/specialization/86T9YGQDCEPX",
      localImageCandidates: [
        "images/specialization_2.jpg",
        "images/specialization_3.jpg"
      ],
      status: "verify_link_exists_but_local_cert_image_not_finalized"
    },
    {
      id: "math_for_ml",
      title: "Mathematics for Machine Learning",
      verifyUrl: "https://coursera.org/verify/specialization/4FY6HTFLGHUD",
      localImageCandidates: [
        "images/specialization_1.jpg",
        "images/specialization_2.jpg"
      ],
      status: "verify_link_exists_but_local_cert_image_not_finalized"
    }
  ],

  legacyDecks: {
    legacy_ml_copilot: {
      title: "ML Copilot slide deck (from old index modal)",
      origin: "index.html projectData['ml-copilot']",
      images: [
        "images/mlcopilot_slide1_agent.jpg",
        "images/mlcopilot_slide2_functionC.jpeg",
        "images/mlcopilot_slide3_codeEx.png",
        "images/mlcopilot_slide3.5_workflow.jpeg",
        "images/mlcopilot_slide4_envent.png",
        "images/mlcopilot_slide5_overall.jpg"
      ],
      recommendedTargets: [
        "project_ml_copilot.html (new)",
        "index.html (card click -> detail page)"
      ]
    },
    legacy_pioneer: {
      title: "PIONEER pathology deck (from old index modal)",
      origin: "index.html projectData['pioneer']",
      images: [
        "images/histo_slide1_wsi.png",
        "images/histo_slide2_hypothesis.png",
        "images/histo_slide3_methodology.png",
        "images/histo_slide4_results.png"
      ],
      recommendedTargets: [
        "project_cancer_genomics.html (new)",
        "project_oncogemma.html (new gallery section)"
      ]
    },
    legacy_gat: {
      title: "Graph Attention Autoencoder deck (from old index modal)",
      origin: "index.html projectData['gat']",
      images: [
        "images/graph_slide1_complete_project.png",
        "images/graph_slide2_omics_feature.png",
        "images/graph_slide3_node_features.png",
        "images/graph_slide4_result.png",
        "images/graph_slide5_final_result.png",
        "images/me_presenting_poster.png"
      ],
      recommendedTargets: [
        "project_cancer_genomics.html (new)",
        "project_oncogemma.html (new gallery section)"
      ]
    },
    legacy_meddiscover: {
      title: "MedDiscover thesis deck (from old index modal)",
      origin: "index.html projectData['meddiscover']",
      images: [
        "images/thesis_slide_0_MedDiscover.png",
        "images/thesis_slide_1_hypothesis.png",
        "images/thesis_slide_2_RAGvLLM.png",
        "images/thesis_slide_3_methodology_commplete.png",
        "images/thesis_slide_4_final_results.png",
        "images/thesis_slide_5_results_metrics.png"
      ],
      recommendedTargets: [
        "project_meddiscover.html (new gallery section)",
        "index.html (card click -> detail page)"
      ]
    },
    legacy_weatherbot: {
      title: "Weatherbot deck (placeholder only)",
      origin: "index.html projectData['weatherbot']",
      images: [
        "https://placehold.co/600x400/F59E0B/FFFFFF?text=Chatbot+Interface",
        "https://placehold.co/600x400/F59E0B/EEEEEE?text=API+Call+Flow"
      ],
      recommendedTargets: [
        "future project_weatherbot.html when real media is available"
      ],
      status: "placeholder_only"
    }
  },

  floatingNodeMedia: {
    origin: "index.html nodeImageSources",
    images: [
      "images/graph_slide1_complete_project.png",
      "images/graph_slide2_omics_feature.png",
      "images/graph_slide3_node_features.png",
      "images/histo_slide1_wsi.png",
      "images/histo_slide3_methodology.png",
      "images/histo_slide4_results.png",
      "images/me_presenting_poster.png",
      "images/me_presenting_slide.png",
      "images/mlcopilot_slide1_agent.jpg",
      "images/mlcopilot_slide5_overall.jpg",
      "images/specialization_1.jpg",
      "images/specialization_2.jpg",
      "images/specialization_3.jpg",
      "images/thesis_slide_0_MedDiscover.png",
      "images/thesis_slide_2_RAGvLLM.png",
      "images/thesis_slide_4_final_results.png",
      "images/thesis_slide_5_results_metrics.png"
    ],
    recommendedUse: [
      "index hero/background floating image nodes",
      "optional reduced set per subpage to match project theme"
    ]
  },

  repurposePlanByPage: {
    "index.html": {
      cards: {
        cancerGenomicsWorks: {
          deckIds: ["legacy_pioneer", "legacy_gat"],
          action: "Open dedicated detail page with slider/gallery and links."
        },
        tfCertification: {
          deckIds: [],
          action:
            "Open certification detail page or cert modal backed by real local files."
        },
        researchPapers: {
          deckIds: [],
          action:
            "Open research page with publication entries, conference items, and DOI links."
        },
        mlCopilotAgent: {
          deckIds: ["legacy_ml_copilot"],
          action: "Open dedicated detail page with existing 6-slide set."
        },
        meddiscover: {
          deckIds: ["legacy_meddiscover"],
          action:
            "Keep card link to project_meddiscover.html and add a slide gallery section there."
        }
      }
    },
    "project_oncogemma.html": {
      suggestedGalleryDeckIds: ["legacy_pioneer", "legacy_gat"],
      suggestedSections: ["WSI pipeline slides", "Biomarker graph slides", "Conference mentions"]
    },
    "project_meddiscover.html": {
      suggestedGalleryDeckIds: ["legacy_meddiscover"],
      suggestedSections: ["Thesis problem framing", "RAG methodology", "Results and metrics"]
    },
    "project_pelliscope.html": {
      suggestedGalleryDeckIds: [],
      preferredMedia: [
        "assets/media/videos/pelliscope_preview.mp4",
        "assets/media/videos/pelliscope-mobile-ad1.mp4",
        "assets/media/videos/pelliscope_top_preview.mp4"
      ],
      suggestedSections: ["Clinical workflow visuals", "Validation snapshots", "Deployment highlights"]
    }
  },

  pageContent: {
    usageGuidance: {
      renderModel:
        "Use this section to power independent pages and/or expandable sections inside index.html. Each content entry is self-contained.",
      sliderModel:
        "For slide-deck behavior, read entry.slider.deckIds -> resolve images from legacyDecks -> support next/prev navigation.",
      recommendedRenderTargets: [
        "index.html (card click -> detail page)",
        "project_pelliscope.html (enhanced with gallery/papers/conference)",
        "project_oncogemma.html (enhanced with gallery/papers/conference)",
        "project_meddiscover.html (enhanced with thesis gallery)"
      ]
    },

    indexV2Bindings: {
      page: "index.html",
      cards: [
        {
          selectorHint: "Cancer Genomics Works highlight card",
          routeType: "internal_page",
          targetContentId: "content_cancer_genomics",
          targetPage: "project_cancer_genomics.html",
          fallbackExternalLink:
            "https://huggingface.co/spaces/VatsalPatel18/GraphAttentionAutoencoder-MultiOmics"
        },
        {
          selectorHint: "Deep Learning & TF Certification highlight card",
          routeType: "internal_page_or_modal",
          targetContentId: "content_cert_tf",
          targetPage: "certification_tensorflow_developer.html"
        },
        {
          selectorHint: "Research Papers highlight card",
          routeType: "internal_page",
          targetContentId: "content_research_publications",
          targetPage: "research_publications.html"
        },
        {
          selectorHint: "OncoGemma project card",
          routeType: "existing_page",
          targetContentId: "content_oncogemma",
          targetPage: "project_oncogemma.html"
        },
        {
          selectorHint: "PelliScope project card",
          routeType: "existing_page",
          targetContentId: "content_pelliscope",
          targetPage: "project_pelliscope.html"
        },
        {
          selectorHint: "MedDiscover project card",
          routeType: "existing_page",
          targetContentId: "content_meddiscover",
          targetPage: "project_meddiscover.html"
        },
        {
          selectorHint: "ML Copilot Agent project card",
          routeType: "internal_page",
          targetContentId: "content_ml_copilot",
          targetPage: "project_ml_copilot.html"
        }
      ]
    },

    entries: {
      content_pelliscope: {
        id: "content_pelliscope",
        status: "existing_page",
        page: "project_pelliscope.html",
        title: "PelliScope",
        subtitle: "Dermatology AI. Redefined.",
        badge: "Deployment Ready (AUC 0.863)",
        summary:
          "A clinically validated, multi-instance learning platform designed to mirror real tele-dermatology workflows.",
        stats: [
          { label: "Real Clinical Cases", value: "450+" },
          { label: "Top-1 AUC", value: "0.863" },
          { label: "Images Per Case", value: "1-3" }
        ],
        keyPoints: [
          "Attention-Based Multi-Instance Learning for multi-photo case understanding.",
          "Built for GCC and US telemedicine operating patterns.",
          "Pre-consultation triage designed to reduce clinician fatigue."
        ],
        links: [
          { label: "Official Website", url: "https://www.pelliscope.in", type: "website" },
          {
            label: "Official LinkedIn Post",
            url: "https://www.linkedin.com/posts/vatsal-patel-95b429141_digitalhealth-aihealthcare-pharmamarketing-activity-7399682830387294208-tL7P?utm_source=share&utm_medium=member_desktop&rcm=ACoAACJppBcBYGcCM4jD4mdwm52pKD2dAIL-sU0",
            type: "linkedin_post"
          }
        ],
        media: {
          icon: "assets/media/icons/pelliscope.png",
          heroVideo: "assets/media/videos/pelliscope_preview.mp4",
          galleryVideos: [
            "assets/media/videos/pelliscope_preview.mp4",
            "assets/media/videos/pelliscope-mobile-ad1.mp4",
            "assets/media/videos/pelliscope_top_preview.mp4"
          ]
        },
        slider: {
          enabled: false,
          deckIds: []
        },
        conferenceItems: [
          {
            title: "WHX Dubai 2026 live preview context",
            assetCandidates: [
              "images/me_presenting_poster.png",
              "images/me_presenting_slide.png"
            ]
          }
        ],
        publications: []
      },

      content_oncogemma: {
        id: "content_oncogemma",
        status: "existing_page",
        page: "project_oncogemma.html",
        title: "OncoGemma",
        subtitle: "Computational Biology. Accelerated.",
        badge: "Research Prototype",
        summary:
          "Advanced pathology workstation integrating gigapixel WSI analysis and multimodal AI for diagnosis and prognosis.",
        stats: [
          { label: "Core Track", value: "Diagnosis" },
          { label: "Core Track", value: "Prognosis" }
        ],
        keyPoints: [
          "Cancer subtype prediction from high-resolution histopathology.",
          "Mutational biomarker identification paired with graph autoencoders.",
          "WSI patching + spatial graph construction for biologically meaningful context."
        ],
        links: [
          {
            label: "Related HuggingFace Space",
            url: "https://huggingface.co/spaces/VatsalPatel18/GraphAttentionAutoencoder-MultiOmics",
            type: "demo"
          },
          {
            label: "Related GitHub",
            url: "https://github.com/VatsalPatel18/GraphAttentionAutoencoder-MultiOmics",
            type: "code"
          },
          {
            label: "Official LinkedIn Post",
            url: "https://www.linkedin.com/posts/vatsal-patel-95b429141_pathologyai-oncology-digitalhealth-activity-7400016851470237696-g9tJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAACJppBcBYGcCM4jD4mdwm52pKD2dAIL-sU0",
            type: "linkedin_post"
          }
        ],
        media: {
          icon: "assets/media/icons/oncogemma_logo_only.png",
          heroVideo: "assets/media/videos/oncogemma-demo1_crop.mp4",
          galleryVideos: ["assets/media/videos/oncogemma-demo1_crop.mp4"]
        },
        slider: {
          enabled: true,
          deckIds: ["legacy_pioneer", "legacy_gat"]
        },
        conferenceItems: [
          {
            title: "Helmholtz AI Conference 2023 (presentation-linked work)",
            links: [{ label: "Zenodo Preprint", url: "https://doi.org/10.5281/zenodo.14357409" }]
          }
        ],
        publications: [
          {
            title: "Graph Attention Networks for Biomedical Insights (Preprint)",
            venue: "Zenodo",
            url: "https://doi.org/10.5281/zenodo.14357409"
          }
        ]
      },

      content_meddiscover: {
        id: "content_meddiscover",
        status: "existing_page",
        page: "project_meddiscover.html",
        title: "MedDiscover",
        subtitle: "Query PubMed Like an Expert.",
        badge: "Open Source",
        summary:
          "RAG system for biomedical literature grounded retrieval and synthesis, focused on reducing hallucinated claims.",
        keyPoints: [
          "Domain-specific embeddings (MedCPT) for retrieval quality.",
          "Vector search over literature chunks for top-k evidence retrieval.",
          "Answer generation constrained to retrieved context."
        ],
        links: [
          { label: "GitHub (owner)", url: "https://github.com/VatsalPatel18", type: "profile" }
        ],
        media: {
          icon: null,
          galleryImages: [
            "images/thesis_slide_0_MedDiscover.png",
            "images/thesis_slide_1_hypothesis.png",
            "images/thesis_slide_2_RAGvLLM.png",
            "images/thesis_slide_3_methodology_commplete.png",
            "images/thesis_slide_4_final_results.png",
            "images/thesis_slide_5_results_metrics.png"
          ]
        },
        slider: {
          enabled: true,
          deckIds: ["legacy_meddiscover"]
        },
        conferenceItems: [],
        publications: []
      },

      content_cancer_genomics: {
        id: "content_cancer_genomics",
        status: "new_page_required",
        page: "project_cancer_genomics.html",
        title: "Cancer Genomics Works",
        subtitle: "Pathology + Multi-Omics + Graph Attention",
        badge: "Research Program",
        summary:
          "Combined program view of PIONEER and Graph Attention Autoencoder work for risk prediction, biomarker discovery, and translational oncology insights.",
        keyPoints: [
          "Immunomethylomic tuning from pathology to text models for HNSCC risk prediction.",
          "Graph Attention Autoencoder for multi-omics integration and biomarker relevance.",
          "Clinical utility focus with reproducible evaluation pathways."
        ],
        links: [
          {
            label: "HuggingFace Space",
            url: "https://huggingface.co/spaces/VatsalPatel18/GraphAttentionAutoencoder-MultiOmics",
            type: "demo"
          },
          {
            label: "GitHub",
            url: "https://github.com/VatsalPatel18/GraphAttentionAutoencoder-MultiOmics",
            type: "code"
          },
          {
            label: "Zenodo Preprint",
            url: "https://doi.org/10.5281/zenodo.14357409",
            type: "paper"
          }
        ],
        media: {
          heroImage: "images/histo_slide1_wsi.png",
          galleryDeckIds: ["legacy_pioneer", "legacy_gat"]
        },
        slider: {
          enabled: true,
          deckIds: ["legacy_pioneer", "legacy_gat"]
        },
        conferenceItems: [
          {
            title: "Helmholtz AI Conference 2023",
            notes: "Presentation-linked outcomes connected to GAT multi-omics work."
          }
        ],
        publications: [
          {
            title:
              "Graph Attention Autoencoder for Multi-Omics (HNSCC risk stratification)",
            venue: "Zenodo Preprint",
            url: "https://doi.org/10.5281/zenodo.14357409"
          },
          {
            title: "Top In-Silico pathogenicity prediction methods",
            venue: "BioData Mining (Jan 2025)",
            url: null
          },
          {
            title: "Dysregulated immune response for COVID-19",
            venue: "Cytokine (Dec 2023)",
            url: null
          }
        ]
      },

      content_ml_copilot: {
        id: "content_ml_copilot",
        status: "new_page_required",
        page: "project_ml_copilot.html",
        title: "ML Copilot Agent",
        subtitle: "Interactive ML workflow assistant",
        badge: "Tooling + Automation",
        summary:
          "Agentic assistant for data preprocessing, training, and evaluation workflows with command-driven guidance.",
        keyPoints: [
          "Natural-language assisted machine learning task execution.",
          "Supports practical experimental iteration and workflow acceleration.",
          "Backed by open-source distribution and documentation."
        ],
        links: [
          {
            label: "GitHub",
            url: "https://github.com/VatsalPatel18/ml-copilot-agent.git",
            type: "code"
          },
          {
            label: "PyPI",
            url: "https://pypi.org/project/ml-copilot-agent/",
            type: "package"
          },
          {
            label: "Documentation",
            url: "https://ml-copilot-agent.readthedocs.io/en/latest/",
            type: "docs"
          }
        ],
        media: {
          galleryDeckIds: ["legacy_ml_copilot"],
          galleryImages: [
            "images/mlcopilot_slide1_agent.jpg",
            "images/mlcopilot_slide2_functionC.jpeg",
            "images/mlcopilot_slide3_codeEx.png",
            "images/mlcopilot_slide3.5_workflow.jpeg",
            "images/mlcopilot_slide4_envent.png",
            "images/mlcopilot_slide5_overall.jpg"
          ]
        },
        slider: {
          enabled: true,
          deckIds: ["legacy_ml_copilot"]
        },
        conferenceItems: [],
        publications: []
      },

      content_research_publications: {
        id: "content_research_publications",
        status: "new_page_required",
        page: "research_publications.html",
        title: "Research & Publications",
        subtitle: "Papers, conference outputs, and technical artifacts",
        sections: [
          {
            id: "papers",
            title: "Publications",
            items: [
              {
                title: "Top In-Silico pathogenicity prediction methods",
                venue: "BioData Mining",
                dateLabel: "January 2025",
                url: null
              },
              {
                title: "Dysregulated immune response for COVID-19",
                venue: "Cytokine",
                dateLabel: "December 2023",
                url: null
              },
              {
                title: "Graph Attention Networks for Biomedical Insights",
                venue: "Zenodo (Preprint)",
                dateLabel: "2024",
                url: "https://doi.org/10.5281/zenodo.14357409"
              }
            ]
          },
          {
            id: "conference",
            title: "Conference Items",
            items: [
              {
                title: "WHX Dubai 2026 live previews",
                media: ["images/me_presenting_poster.png", "images/me_presenting_slide.png"],
                link:
                  "https://www.linkedin.com/posts/vatsal-patel-95b429141_whx-worldhealthexpodubai-arabhealth-activity-7428195692906459136-bo9I"
              },
              {
                title: "Helmholtz AI Conference 2023 presentation-linked work",
                media: ["images/me_presenting_poster.png"],
                link: "https://doi.org/10.5281/zenodo.14357409"
              },
              {
                title: "Peer review contribution (very short note)",
                media: ["images/certificate_reviewing_papers.jpeg"],
                note: "Reviewed manuscripts for a 4.8 IF journal in biomedical signal processing and applied AI.",
                link:
                  "https://www.linkedin.com/posts/vatsal-patel-95b429141_peerreview-scientificcommunity-researchintegrity-activity-7407060637798797313-R7cW?utm_source=share&utm_medium=member_desktop&rcm=ACoAACJppBcBYGcCM4jD4mdwm52pKD2dAIL-sU0"
              }
            ]
          }
        ]
      },

      content_cert_tf: {
        id: "content_cert_tf",
        status: "new_page_or_modal_required",
        page: "certification_tensorflow_developer.html",
        title: "DeepLearning.AI TensorFlow Developer",
        subtitle: "Professional Certificate (4 Courses)",
        issuedLabel: "July 2020",
        summary:
          "Official verification for building, training, and deploying scalable neural network workflows.",
        verifyUrl: "https://coursera.org/verify/professional-cert/F4RVGGKYRMN6",
        localImagePriority: [
          "images/specialization_1.jpg",
          "images/specialization_3.jpg",
          "images/Degree.png"
        ],
        currentV2Trigger: "openCertModal('Placeholder_Cert.png')",
        recommendedBehavior:
          "Prefer dedicated cert page with image + verify link + related specialization links."
      }
    }
  },

  unresolvedItems: {
    missingLocalAssets: [
      "images/Placeholder_Cert.png",
      "images/bachelors_degree_certificate.jpg"
    ],
    placeholdersStillLive: [
      "index LinkedIn post media uses placehold.co",
      "index certification uses placeholder cert source",
      "index.html certification thumbnails use placehold.co",
      "index.html weatherbot deck is placeholder-only"
    ],
    constraints: [
      "Coursera verify links do not guarantee direct downloadable cert image files.",
      "Official certificate image/PDF files should be supplied locally for stable rendering."
    ]
  }
};
