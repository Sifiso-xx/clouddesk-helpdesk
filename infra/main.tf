terraform {
  required_version = ">= 1.6.0"
}

variable "project_name" {
  type    = string
  default = "clouddesk-helpdesk"
}

output "project_name" {
  value = var.project_name
}
