export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      challange_member_attendance: {
        Row: {
          challange_member_id: number | null
          check_in_date: string
          created_at: string
          deleted_at: string | null
          file_id: string | null
          id: number
          points_awarded: number
          updated_at: string | null
        }
        Insert: {
          challange_member_id?: number | null
          check_in_date?: string
          created_at?: string
          deleted_at?: string | null
          file_id?: string | null
          id?: number
          points_awarded?: number
          updated_at?: string | null
        }
        Update: {
          challange_member_id?: number | null
          check_in_date?: string
          created_at?: string
          deleted_at?: string | null
          file_id?: string | null
          id?: number
          points_awarded?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "challange_member_attendance_challange_member_id_fkey"
            columns: ["challange_member_id"]
            isOneToOne: false
            referencedRelation: "challenge_members"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "challange_member_attendance_file_id_fkey"
            columns: ["file_id"]
            isOneToOne: false
            referencedRelation: "objects"
            referencedColumns: ["id"]
          },
        ]
      }
      challenge_attachments: {
        Row: {
          challenge_attachment_type:
            | Database["public"]["Enums"]["challenge_attachment_type"]
            | null
          challenge_id: number
          created_at: string
          deleted_at: string | null
          display_order: number
          file_id: string | null
          id: number
          updated_at: string | null
        }
        Insert: {
          challenge_attachment_type?:
            | Database["public"]["Enums"]["challenge_attachment_type"]
            | null
          challenge_id: number
          created_at?: string
          deleted_at?: string | null
          display_order?: number
          file_id?: string | null
          id?: number
          updated_at?: string | null
        }
        Update: {
          challenge_attachment_type?:
            | Database["public"]["Enums"]["challenge_attachment_type"]
            | null
          challenge_id?: number
          created_at?: string
          deleted_at?: string | null
          display_order?: number
          file_id?: string | null
          id?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "challenge_attachments_challenge_id_fkey"
            columns: ["challenge_id"]
            isOneToOne: false
            referencedRelation: "challenges"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "challenge_attachments_file_id_fkey"
            columns: ["file_id"]
            isOneToOne: false
            referencedRelation: "objects"
            referencedColumns: ["id"]
          },
        ]
      }
      challenge_categories: {
        Row: {
          created_at: string
          id: number
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      challenge_members: {
        Row: {
          challenge_id: number
          created_at: string
          deleted_at: string | null
          expired_at: string | null
          id: number
          status: Database["public"]["Enums"]["challenge_member_status"] | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          challenge_id: number
          created_at?: string
          deleted_at?: string | null
          expired_at?: string | null
          id?: number
          status?: Database["public"]["Enums"]["challenge_member_status"] | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          challenge_id?: number
          created_at?: string
          deleted_at?: string | null
          expired_at?: string | null
          id?: number
          status?: Database["public"]["Enums"]["challenge_member_status"] | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "challenge_members_challenge_id_fkey"
            columns: ["challenge_id"]
            isOneToOne: false
            referencedRelation: "challenges"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "challenge_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      challenges: {
        Row: {
          attendance_point: number
          challenge_category_id: number
          challenge_period_type: Database["public"]["Enums"]["challenge_period_type"]
          created_at: string
          deleted_at: string | null
          entry_fee: number
          expired_at: string | null
          how_to_check_in: string | null
          id: number
          is_holiday_included: boolean
          is_instant_photo_require: boolean
          is_photo_reqiure: boolean
          join_limit: number | null
          living_tip: string | null
          maximum_attendance_point: number | null
          minimum_attendance_count: number
          status: Database["public"]["Enums"]["challenge_status"] | null
          title: string
          updated_at: string | null
        }
        Insert: {
          attendance_point?: number
          challenge_category_id: number
          challenge_period_type?: Database["public"]["Enums"]["challenge_period_type"]
          created_at?: string
          deleted_at?: string | null
          entry_fee?: number
          expired_at?: string | null
          how_to_check_in?: string | null
          id?: number
          is_holiday_included?: boolean
          is_instant_photo_require?: boolean
          is_photo_reqiure?: boolean
          join_limit?: number | null
          living_tip?: string | null
          maximum_attendance_point?: number | null
          minimum_attendance_count?: number
          status?: Database["public"]["Enums"]["challenge_status"] | null
          title: string
          updated_at?: string | null
        }
        Update: {
          attendance_point?: number
          challenge_category_id?: number
          challenge_period_type?: Database["public"]["Enums"]["challenge_period_type"]
          created_at?: string
          deleted_at?: string | null
          entry_fee?: number
          expired_at?: string | null
          how_to_check_in?: string | null
          id?: number
          is_holiday_included?: boolean
          is_instant_photo_require?: boolean
          is_photo_reqiure?: boolean
          join_limit?: number | null
          living_tip?: string | null
          maximum_attendance_point?: number | null
          minimum_attendance_count?: number
          status?: Database["public"]["Enums"]["challenge_status"] | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "challenges_challenge_category_id_fkey"
            columns: ["challenge_category_id"]
            isOneToOne: false
            referencedRelation: "challenge_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      channels: {
        Row: {
          created_at: string
          created_by: string
          id: number
          slug: string
        }
        Insert: {
          created_at?: string
          created_by: string
          id?: number
          slug: string
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: number
          slug?: string
        }
        Relationships: [
          {
            foreignKeyName: "channels_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      discount_needs: {
        Row: {
          created_at: string
          description: string | null
          id: number
          is_visible: boolean | null
          necessity_level: number | null
          saving_category_id: number | null
          title: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          is_visible?: boolean | null
          necessity_level?: number | null
          saving_category_id?: number | null
          title?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          is_visible?: boolean | null
          necessity_level?: number | null
          saving_category_id?: number | null
          title?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "discount_needs_saving_category_id_fkey"
            columns: ["saving_category_id"]
            isOneToOne: false
            referencedRelation: "saving_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "discount_needs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      discount_needs_images: {
        Row: {
          created_at: string
          deleted_at: string | null
          discount_needs_id: number
          display_order: number | null
          id: number
          image_url: string
          is_deleted: boolean | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          discount_needs_id: number
          display_order?: number | null
          id?: number
          image_url: string
          is_deleted?: boolean | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          discount_needs_id?: number
          display_order?: number | null
          id?: number
          image_url?: string
          is_deleted?: boolean | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "discount_needs_images_discount_needs_id_fkey"
            columns: ["discount_needs_id"]
            isOneToOne: false
            referencedRelation: "discount_needs"
            referencedColumns: ["id"]
          },
        ]
      }
      discount_needs_like_history: {
        Row: {
          created_at: string
          discount_needs_id: number | null
          id: number
          is_like: boolean | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          discount_needs_id?: number | null
          id?: number
          is_like?: boolean | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          discount_needs_id?: number | null
          id?: number
          is_like?: boolean | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "discount_needs_like_history_discount_needs_id_fkey"
            columns: ["discount_needs_id"]
            isOneToOne: false
            referencedRelation: "discount_needs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "discount_needs_like_history_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          channel_id: number
          created_at: string
          deleted_at: string | null
          id: number
          message: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          channel_id: number
          created_at?: string
          deleted_at?: string | null
          id?: number
          message?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          channel_id?: number
          created_at?: string
          deleted_at?: string | null
          id?: number
          message?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_channel_id_fkey"
            columns: ["channel_id"]
            isOneToOne: false
            referencedRelation: "channels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      messages_history: {
        Row: {
          channel_id: number
          created_at: string
          id: number
          message: string | null
          user_id: string
        }
        Insert: {
          channel_id: number
          created_at?: string
          id?: number
          message?: string | null
          user_id: string
        }
        Update: {
          channel_id?: number
          created_at?: string
          id?: number
          message?: string | null
          user_id?: string
        }
        Relationships: []
      }
      notification_events: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: number
          notification_template_name: string
          update_reason: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id?: number
          notification_template_name: string
          update_reason?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: number
          notification_template_name?: string
          update_reason?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notification_events_notification_template_name_fkey"
            columns: ["notification_template_name"]
            isOneToOne: false
            referencedRelation: "notification_templates"
            referencedColumns: ["template_name"]
          },
          {
            foreignKeyName: "notification_events_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      notification_templates: {
        Row: {
          body: string | null
          created_at: string
          is_email_send: boolean
          is_enabled: boolean
          is_marketing: boolean
          is_push_send: boolean
          is_sms_send: boolean
          landing_url: string | null
          template_group: string | null
          template_name: string
          template_sub_group: string | null
          title: string | null
          updated_at: string | null
        }
        Insert: {
          body?: string | null
          created_at?: string
          is_email_send?: boolean
          is_enabled?: boolean
          is_marketing?: boolean
          is_push_send?: boolean
          is_sms_send?: boolean
          landing_url?: string | null
          template_group?: string | null
          template_name: string
          template_sub_group?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          body?: string | null
          created_at?: string
          is_email_send?: boolean
          is_enabled?: boolean
          is_marketing?: boolean
          is_push_send?: boolean
          is_sms_send?: boolean
          landing_url?: string | null
          template_group?: string | null
          template_name?: string
          template_sub_group?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      point_codes: {
        Row: {
          code: string
          created_at: string
          english_name: string | null
          expiration_date: string | null
          expiration_period: number | null
          expiration_period_type:
            | Database["public"]["Enums"]["point_expiration_period_type"]
            | null
          is_auto_issue: boolean
          is_enable: boolean
          name: string | null
          point_type: Database["public"]["Enums"]["point_type"]
          updated_at: string | null
        }
        Insert: {
          code: string
          created_at?: string
          english_name?: string | null
          expiration_date?: string | null
          expiration_period?: number | null
          expiration_period_type?:
            | Database["public"]["Enums"]["point_expiration_period_type"]
            | null
          is_auto_issue?: boolean
          is_enable?: boolean
          name?: string | null
          point_type: Database["public"]["Enums"]["point_type"]
          updated_at?: string | null
        }
        Update: {
          code?: string
          created_at?: string
          english_name?: string | null
          expiration_date?: string | null
          expiration_period?: number | null
          expiration_period_type?:
            | Database["public"]["Enums"]["point_expiration_period_type"]
            | null
          is_auto_issue?: boolean
          is_enable?: boolean
          name?: string | null
          point_type?: Database["public"]["Enums"]["point_type"]
          updated_at?: string | null
        }
        Relationships: []
      }
      point_wallets: {
        Row: {
          available_balance: number | null
          balance: number | null
          created_at: string
          id: number
          is_enable: boolean | null
          point_code: string
          point_wallet_status:
            | Database["public"]["Enums"]["point_wallet_status"]
            | null
          point_wallet_type: Database["public"]["Enums"]["point_wallet_type"]
          updated_at: string | null
          user_id: string
        }
        Insert: {
          available_balance?: number | null
          balance?: number | null
          created_at?: string
          id: number
          is_enable?: boolean | null
          point_code: string
          point_wallet_status?:
            | Database["public"]["Enums"]["point_wallet_status"]
            | null
          point_wallet_type: Database["public"]["Enums"]["point_wallet_type"]
          updated_at?: string | null
          user_id: string
        }
        Update: {
          available_balance?: number | null
          balance?: number | null
          created_at?: string
          id?: number
          is_enable?: boolean | null
          point_code?: string
          point_wallet_status?:
            | Database["public"]["Enums"]["point_wallet_status"]
            | null
          point_wallet_type?: Database["public"]["Enums"]["point_wallet_type"]
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "point_wallet\bs_point_code_fkey"
            columns: ["point_code"]
            isOneToOne: false
            referencedRelation: "point_codes"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "point_wallet\bs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      saving_categories: {
        Row: {
          created_at: string
          id: number
          name: string
          saving_price: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string
          saving_price: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          saving_price?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      saving_price_comments: {
        Row: {
          comment: string | null
          created_at: string
          deleted_at: string | null
          id: number
          is_deleted: boolean | null
          saving_price: number | null
          updated_at: string | null
        }
        Insert: {
          comment?: string | null
          created_at?: string
          deleted_at?: string | null
          id?: number
          is_deleted?: boolean | null
          saving_price?: number | null
          updated_at?: string | null
        }
        Update: {
          comment?: string | null
          created_at?: string
          deleted_at?: string | null
          id?: number
          is_deleted?: boolean | null
          saving_price?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      saving_records: {
        Row: {
          created_at: string
          deleted_at: string | null
          description: string | null
          id: number
          is_deleted: boolean | null
          is_shared: boolean | null
          saving_price: number | null
          updated_at: string | null
          user_id: string | null
          user_saving_category_id: number | null
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          id?: number
          is_deleted?: boolean | null
          is_shared?: boolean | null
          saving_price?: number | null
          updated_at?: string | null
          user_id?: string | null
          user_saving_category_id?: number | null
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          id?: number
          is_deleted?: boolean | null
          is_shared?: boolean | null
          saving_price?: number | null
          updated_at?: string | null
          user_id?: string | null
          user_saving_category_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "saving_records_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "saving_records_user_saving_category_id_fkey"
            columns: ["user_saving_category_id"]
            isOneToOne: false
            referencedRelation: "user_saving_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      saving_records_summary: {
        Row: {
          created_at: string
          id: number
          price: number | null
          saving_category_id: number | null
          updated_at: string | null
          user_id: number | null
          user_saving_category_id: number | null
          year_month: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          price?: number | null
          saving_category_id?: number | null
          updated_at?: string | null
          user_id?: number | null
          user_saving_category_id?: number | null
          year_month?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          price?: number | null
          saving_category_id?: number | null
          updated_at?: string | null
          user_id?: number | null
          user_saving_category_id?: number | null
          year_month?: string | null
        }
        Relationships: []
      }
      saving_statistics_by_age: {
        Row: {
          age_range: string | null
          created_at: string
          gender: string | null
          id: number
          saving_category_id: number | null
          saving_price_per_month: number | null
          updated_at: string | null
        }
        Insert: {
          age_range?: string | null
          created_at?: string
          gender?: string | null
          id?: number
          saving_category_id?: number | null
          saving_price_per_month?: number | null
          updated_at?: string | null
        }
        Update: {
          age_range?: string | null
          created_at?: string
          gender?: string | null
          id?: number
          saving_category_id?: number | null
          saving_price_per_month?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      saving_statistics_by_user: {
        Row: {
          created_at: string
          date: string | null
          id: number
          saving_category_id: number | null
          saving_price_per_month: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          date?: string | null
          id?: number
          saving_category_id?: number | null
          saving_price_per_month?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          date?: string | null
          id?: number
          saving_category_id?: number | null
          saving_price_per_month?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      service_environments: {
        Row: {
          created_at: string | null
          id: number
          updated_at: string | null
          variable_name: string
          variable_value: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          updated_at?: string | null
          variable_name: string
          variable_value: string
        }
        Update: {
          created_at?: string | null
          id?: number
          updated_at?: string | null
          variable_name?: string
          variable_value?: string
        }
        Relationships: []
      }
      user_devices: {
        Row: {
          created_at: string | null
          device_model: string | null
          device_os: string | null
          device_type: Database["public"]["Enums"]["device_type"]
          fcm_token: string
          id: number
          is_active: boolean | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          device_model?: string | null
          device_os?: string | null
          device_type: Database["public"]["Enums"]["device_type"]
          fcm_token: string
          id?: number
          is_active?: boolean | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          device_model?: string | null
          device_os?: string | null
          device_type?: Database["public"]["Enums"]["device_type"]
          fcm_token?: string
          id?: number
          is_active?: boolean | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_devices_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_notification_settings: {
        Row: {
          created_at: string
          id: number
          is_enabled: boolean
          nofitication_category: string | null
          notification_channel: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          is_enabled?: boolean
          nofitication_category?: string | null
          notification_channel: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          is_enabled?: boolean
          nofitication_category?: string | null
          notification_channel?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_notification_settings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_notifications: {
        Row: {
          created_at: string
          id: number
          is_read: boolean
          landing_url: string | null
          message: string
          title: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id: number
          is_read?: boolean
          landing_url?: string | null
          message: string
          title: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          is_read?: boolean
          landing_url?: string | null
          message?: string
          title?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_saving_categories: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: number
          is_deleted: boolean | null
          name: string | null
          saving_category_id: number | null
          saving_price: number | null
          updated_at: string | null
          user_id: number
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id?: number
          is_deleted?: boolean | null
          name?: string | null
          saving_category_id?: number | null
          saving_price?: number | null
          updated_at?: string | null
          user_id: number
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: number
          is_deleted?: boolean | null
          name?: string | null
          saving_category_id?: number | null
          saving_price?: number | null
          updated_at?: string | null
          user_id?: number
        }
        Relationships: []
      }
      users: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          user_status: Database["public"]["Enums"]["user_status"] | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          user_status?: Database["public"]["Enums"]["user_status"] | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          user_status?: Database["public"]["Enums"]["user_status"] | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      wishlist_categories: {
        Row: {
          created_at: string
          depth: number | null
          id: number
          like_count: number | null
          name: string | null
          parent_category_id: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          depth?: number | null
          id?: number
          like_count?: number | null
          name?: string | null
          parent_category_id?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          depth?: number | null
          id?: number
          like_count?: number | null
          name?: string | null
          parent_category_id?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      wishlist_other_categories: {
        Row: {
          created_at: string
          id: number
          like_count: number | null
          name: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          like_count?: number | null
          name?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          like_count?: number | null
          name?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      app_permission: "channels.delete" | "messages.delete"
      app_role: "ADMIN" | "MODERATOR"
      challenge_attachment_type: "GOOD_EXAMPLE" | "BAD_EXAMPLE"
      challenge_member_status:
        | "ACTIVATED"
        | "RE_ACTIVATED"
        | "SUCCEED"
        | "FAILED"
        | "INACTIVATED"
      challenge_period_type: "DAY" | "WEEK" | "MONTH" | "NONE"
      challenge_status: "DRAFT" | "PUBLISHED" | "SUSPENDED" | "DELETED"
      device_type: "IOS" | "ANDROID" | "WEB" | "UNKNOWN"
      point_expiration_period_type: "YEAR" | "MONTH" | "DAY" | "DATE" | "WEEK"
      point_type: "PAY" | "SETTLE" | "MARKETING" | "REWARD"
      point_wallet_status: "NORMAL"
      point_wallet_type: "CHALLENGE"
      user_status: "ONLINE" | "OFFLINE"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
