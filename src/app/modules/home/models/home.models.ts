export interface Post {
  id: number;
  name: string;
  bio: string;
  created_at: string;
  profile_pic: string;
  connection_level: number;
  text: string;
  likes_count: number;
  commnets_count: number;
  reposts_count: number;
  type: string;
  is_liked: boolean;
}
