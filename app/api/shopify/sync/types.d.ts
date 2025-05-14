export type ProductWebhook = {
  webhook_call_id: string
  event_triggered_at: string
  attempted_auto_retries_count: number
  webhook_id: string
  site_id: string
  environment: string
  is_environment_primary: boolean
  entity_type: string
  event_type: string
  entity: {
    id: string
    type: string
    attributes: {
      categories: Array<string>
      models: Array<{
        type: string
        attributes: {
          name: string
          variants: Array<{
            type: string
            attributes: {
              article_no: string
              color?: string
              material?: string
              feature: any
              weight?: number
              volume?: number
              price: number
            }
            relationships: {
              item_type: {
                data: {
                  id: string
                  type: string
                }
              }
            }
            id: string
          }>
          drawing: {
            alt: any
            title: any
            custom_data: {}
            focal_point: any
            upload_id: string
          }
          lightsources: Array<{
            type: string
            attributes: {
              lightsource: string
              amount?: number
              included: boolean
              optional: boolean
            }
            relationships: {
              item_type: {
                data: {
                  id: string
                  type: string
                }
              }
            }
            id: string
          }>
          accessories: Array<{
            type: string
            attributes: {
              accessory: string
              article_no: string
              price: number
            }
            relationships: {
              item_type: {
                data: {
                  id: string
                  type: string
                }
              }
            }
            id: string
          }>
        }
        relationships: {
          item_type: {
            data: {
              id: string
              type: string
            }
          }
        }
        id: string
      }>
      hide_in_pricelist: boolean
      image: {
        alt: any
        title: any
        custom_data: {}
        focal_point: any
        upload_id: string
      }
      light_file: any
      title: string
      color_images: Array<{
        alt: any
        title: any
        custom_data: {}
        focal_point: any
        upload_id: string
      }>
      mounting_instructions: any
      environment_image: {
        alt: any
        title: any
        custom_data: {}
        focal_point: any
        upload_id: string
      }
      family: string
      bim_file: {
        alt: any
        title: any
        custom_data: {}
        focal_point: any
        upload_id: string
      }
      product_gallery: Array<{
        type: string
        attributes: {
          gallery?: Array<{
            alt: any
            title: any
            custom_data: {}
            focal_point: any
            upload_id: string
          }>
          text?: {
            schema: string
            document: {
              children: Array<{
                children: Array<{
                  type: string
                  value: string
                }>
                type: string
              }>
              type: string
            }
          }
          image?: {
            alt: any
            title: any
            custom_data: {}
            focal_point: any
            upload_id: string
          }
          first_image?: {
            alt: any
            title: any
            custom_data: {}
            focal_point: any
            upload_id: string
          }
          last_image?: {
            alt: any
            title: any
            custom_data: {}
            focal_point: any
            upload_id: string
          }
        }
        relationships: {
          item_type: {
            data: {
              id: string
              type: string
            }
          }
        }
        id: string
      }>
      pdf_file: {
        da: {
          alt: any
          title: any
          custom_data: {}
          focal_point: any
          upload_id: string
        }
        en: {
          alt: any
          title: any
          custom_data: {}
          focal_point: any
          upload_id: string
        }
        no: {
          alt: any
          title: any
          custom_data: {}
          focal_point: any
          upload_id: string
        }
        sv: {
          alt: any
          title: any
          custom_data: {}
          focal_point: any
          upload_id: string
        }
        "en-GB": {
          alt: any
          title: any
          custom_data: {}
          focal_point: any
          upload_id: string
        }
      }
      designer: string
      mark_as_new: boolean
      upcycled: boolean
      bim_link: string
      additional_information: {
        da: string
        en: string
        no: string
        sv: string
        "en-GB": string
      }
      note: {
        da: string
        en: string
        no: string
        sv: string
        "en-GB": string
      }
      description: {
        da: string
        en: string
        no: string
        sv: string
        "en-GB": string
      }
      electrical_data: Array<string>
      sockets: Array<string>
      dimmable: string
      connection: string
      mounting: any
      slug: string
      updated_at: string
      created_at: string
    }
    relationships: {
      item_type: {
        data: {
          id: string
          type: string
        }
      }
      creator: {
        data: {
          id: string
          type: string
        }
      }
    }
    meta: {
      created_at: string
      updated_at: string
      published_at: string
      publication_scheduled_at: any
      unpublishing_scheduled_at: any
      first_published_at: string
      is_valid: boolean
      is_current_version_valid: boolean
      is_published_version_valid: boolean
      status: string
      current_version: string
      stage: any
    }
  }
  related_entities: Array<{
    id: string
    type: string
    attributes: {
      name: string
      singleton: boolean
      sortable: boolean
      api_key: string
      ordering_direction: string
      ordering_meta: any
      tree: boolean
      modular_block: boolean
      draft_mode_active: boolean
      draft_saving_active: boolean
      all_locales_required: boolean
      collection_appeareance: string
      collection_appearance: string
      has_singleton_item: boolean
      hint: any
      inverse_relationships_enabled: boolean
    }
    relationships: {
      fields: {
        data: Array<{
          id: string
          type: string
        }>
      }
      fieldsets: {
        data: Array<{
          id: string
          type: string
        }>
      }
      singleton_item: {
        data: any
      }
      ordering_field: {
        data: {
          id: string
          type: string
        }
      }
      presentation_title_field: {
        data: {
          id: string
          type: string
        }
      }
      presentation_image_field: {
        data: {
          id: string
          type: string
        }
      }
      title_field: {
        data: {
          id: string
          type: string
        }
      }
      image_preview_field: {
        data: {
          id: string
          type: string
        }
      }
      excerpt_field: {
        data: any
      }
      workflow: {
        data: any
      }
    }
    meta: {
      has_singleton_item: boolean
    }
  }>
}
