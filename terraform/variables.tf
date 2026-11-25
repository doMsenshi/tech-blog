variable "region" {
  default = "ap-northeast-1"
}

variable "project" {
  default = "tech-blog"
}

variable "domain" {
  description = "例: blog.example.com。まだ独自ドメインがなければ空のまま。後で設定可。"
  default     = ""
}
