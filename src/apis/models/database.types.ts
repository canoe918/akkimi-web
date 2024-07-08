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
          email_sent: boolean | null
          event_type: Database["public"]["Enums"]["notification_event"] | null
          id: number
          instagram_sent: boolean | null
          push_sent: boolean | null
          slack_sent: boolean | null
          sms_sent: boolean | null
          updated_at: string | null
          whatsapp_sent: boolean | null
        }
        Insert: {
          created_at?: string
          email_sent?: boolean | null
          event_type?: Database["public"]["Enums"]["notification_event"] | null
          id?: number
          instagram_sent?: boolean | null
          push_sent?: boolean | null
          slack_sent?: boolean | null
          sms_sent?: boolean | null
          updated_at?: string | null
          whatsapp_sent?: boolean | null
        }
        Update: {
          created_at?: string
          email_sent?: boolean | null
          event_type?: Database["public"]["Enums"]["notification_event"] | null
          id?: number
          instagram_sent?: boolean | null
          push_sent?: boolean | null
          slack_sent?: boolean | null
          sms_sent?: boolean | null
          updated_at?: string | null
          whatsapp_sent?: boolean | null
        }
        Relationships: []
      }
      role_permissions: {
        Row: {
          id: number
          permission: Database["public"]["Enums"]["app_permission"]
          role: Database["public"]["Enums"]["app_role"]
        }
        Insert: {
          id?: number
          permission: Database["public"]["Enums"]["app_permission"]
          role: Database["public"]["Enums"]["app_role"]
        }
        Update: {
          id?: number
          permission?: Database["public"]["Enums"]["app_permission"]
          role?: Database["public"]["Enums"]["app_role"]
        }
        Relationships: []
      }
      saving_categories: {
        Row: {
          created_at: string
          default_price: number
          id: number
          name: string
          tip: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          default_price: number
          id?: number
          name?: string
          tip?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          default_price?: number
          id?: number
          name?: string
          tip?: string | null
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
          price: number | null
          updated_at: string | null
        }
        Insert: {
          comment?: string | null
          created_at?: string
          deleted_at?: string | null
          id?: number
          is_deleted?: boolean | null
          price?: number | null
          updated_at?: string | null
        }
        Update: {
          comment?: string | null
          created_at?: string
          deleted_at?: string | null
          id?: number
          is_deleted?: boolean | null
          price?: number | null
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
          saved_price: number | null
          updated_at: string | null
          user_saving_category_id: number | null
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          id?: number
          is_deleted?: boolean | null
          is_shared?: boolean | null
          saved_price?: number | null
          updated_at?: string | null
          user_saving_category_id?: number | null
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          id?: number
          is_deleted?: boolean | null
          is_shared?: boolean | null
          saved_price?: number | null
          updated_at?: string | null
          user_saving_category_id?: number | null
        }
        Relationships: []
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
        }
        Insert: {
          created_at?: string
          id?: number
          price?: number | null
          saving_category_id?: number | null
          updated_at?: string | null
          user_id?: number | null
          user_saving_category_id?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          price?: number | null
          saving_category_id?: number | null
          updated_at?: string | null
          user_id?: number | null
          user_saving_category_id?: number | null
        }
        Relationships: []
      }
      saving_statistics_by_age: {
        Row: {
          age_range: string | null
          avg_price_day: number | null
          avg_price_month: number | null
          avg_price_week: number | null
          created_at: string
          id: number
          saving_category_id: number | null
          updated_at: string | null
        }
        Insert: {
          age_range?: string | null
          avg_price_day?: number | null
          avg_price_month?: number | null
          avg_price_week?: number | null
          created_at?: string
          id?: number
          saving_category_id?: number | null
          updated_at?: string | null
        }
        Update: {
          age_range?: string | null
          avg_price_day?: number | null
          avg_price_month?: number | null
          avg_price_week?: number | null
          created_at?: string
          id?: number
          saving_category_id?: number | null
          updated_at?: string | null
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
          notification_event: Database["public"]["Enums"]["notification_event"]
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          is_enabled?: boolean
          nofitication_category?: string | null
          notification_channel: string
          notification_event: Database["public"]["Enums"]["notification_event"]
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          is_enabled?: boolean
          nofitication_category?: string | null
          notification_channel?: string
          notification_event?: Database["public"]["Enums"]["notification_event"]
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
          id: string
          is_read: boolean
          landing_url: string | null
          message: string
          title: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_read?: boolean
          landing_url?: string | null
          message: string
          title: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
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
      user_roles: {
        Row: {
          id: number
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: number
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: number
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_roles_user_id_fkey"
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
          price: number | null
          saving_category_id: number | null
          updated_at: string | null
          user_id: number
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id?: number
          is_deleted?: boolean | null
          name?: string | null
          price?: number | null
          saving_category_id?: number | null
          updated_at?: string | null
          user_id: number
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: number
          is_deleted?: boolean | null
          name?: string | null
          price?: number | null
          saving_category_id?: number | null
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
          status: Database["public"]["Enums"]["user_status"] | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          status?: Database["public"]["Enums"]["user_status"] | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          status?: Database["public"]["Enums"]["user_status"] | null
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
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      authorize: {
        Args: {
          requested_permission: Database["public"]["Enums"]["app_permission"]
        }
        Returns: boolean
      }
      create_user: {
        Args: {
          email: string
        }
        Returns: string
      }
      custom_access_token_hook: {
        Args: {
          event: Json
        }
        Returns: Json
      }
    }
    Enums: {
      app_permission: "channels.delete" | "messages.delete"
      app_role: "admin" | "moderator"
      device_type: "IOS" | "ANDROID" | "WEB" | "UNKNOWN"
      notification_event:
        | "POST_PUBLISHED"
        | "COMMENT_PUBLISHED"
        | "USER_LONG_TERM_INACTIVE"
        | "USER_HAS_NEW_FOLLOWER"
        | "MENTIONED_IN_POST"
        | "MENTIONED_IN_COMMENT"
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
